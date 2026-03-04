import { applyRacePackage, applySubracePackage } from '../RacePackageHandler';
import { prepareCharacter } from './CharacterFormatHandler';
import { calculateSpellSlots } from '../spellcasting/SlotHandler.js';
import { applyProficiencies } from '../proficiencies/ProficiencyApplier';
import { updateProficiencies } from '../proficiencies/ProficiencyUpdater';
import { saveLevelChange as handleSaveLevelChange} from './characterhandlers/saveLevelChange.js';
import { saveStatChange as handleSaveStatChange } from './characterhandlers/saveStatChange';
import { removeClass as handleRemoveClass } from './characterhandlers/removeClass';
import { confirmSelection as handleConfirmSelection } from './characterhandlers/confirmSelection';
import { confirmMulticlassSelection as handleConfirmMulticlass } from './characterhandlers/confirmMulticlassSelection';
import { cancelLevelChange as handleCancelLevelChange } from './characterhandlers/cancelLevelChange';
import { API_BASE } from '../../api.js';

export const MAX_CHARACTER_LEVEL = 20;

export default function CharacterUpdater(characters, setCharacters, characterId) {
  function saveCharacter(updated) {
    const updatedList = characters.map(c => c.id.toString() === characterId ? updated : c);
    setCharacters(updatedList);
    localStorage.setItem("characters", JSON.stringify(updatedList));
  }

  function applyImmediateUpdate(partialUpdateFn) {
    const character = characters.find(c => c.id.toString() === characterId);
    if (!character) return;

    const updatedCharacter = prepareCharacter(updateProficiencies(partialUpdateFn(character)));
    saveCharacter(updatedCharacter);
  }

  function adjustClassLevel(pendingLevels, index, change) {
    const newLevels = [...pendingLevels];
    const proposedTotal = newLevels.reduce((sum, lvl, i) => sum + (i === index ? lvl + change : lvl), 0);

    if (proposedTotal > MAX_CHARACTER_LEVEL) {
      console.warn(`Cannot exceed level ${MAX_CHARACTER_LEVEL}.`);
      return newLevels;
    }

    newLevels[index] = Math.max(1, newLevels[index] + change);
    return newLevels;
  }

  function syncClassHP(classEntry, targetLevel, hitDie) {
    const fixedHP = Math.floor(hitDie / 2) + 1;
    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < targetLevel) newClassHP.push(fixedHP);
    if (newClassHP.length > targetLevel) newClassHP = newClassHP.slice(0, targetLevel);
    return newClassHP;
  }

  function saveLevelChange(character, pendingLevels, index) {
    handleSaveLevelChange(character, pendingLevels, index, saveCharacter);
  }

  function saveStatChange(character, statKey, newBaseValue) {
    return handleSaveStatChange(character, statKey, newBaseValue, saveCharacter);
  }

  function cancelLevelChange(character, pendingLevels, index) {
    return handleCancelLevelChange(character, pendingLevels, index);
  }

  function confirmSelection(character, selectedOption, overlayType, selectedSubrace, closeOverlayFn, replaceIndex) {
    handleConfirmSelection(character, selectedOption, overlayType, selectedSubrace, closeOverlayFn, replaceIndex, saveCharacter);
  }

  function confirmMulticlassSelection(character, selectedOption, closeOverlayFn) {
    handleConfirmMulticlass(character, selectedOption, closeOverlayFn, saveCharacter);
  }

  function removeClass(character, pendingLevels, index) {
    return handleRemoveClass(character, pendingLevels, index, saveCharacter);
  }

  function fetchOverlayOptions(type, setOptions, character, selectPreloadedOption, setSelectedSubrace) {
    let endpoint = '';
    if (type === 'race') endpoint = `${API_BASE}/api/get_races`;
    if (type === 'background') endpoint = `${API_BASE}/api/get_backgrounds`;
    if (type === 'class') endpoint = `${API_BASE}/api/get_classes`;

    fetch(endpoint)
      .then(async res => {
        if (!res.ok) {
          const errorText = await res.text();
          console.error(`Failed to fetch ${endpoint}: ${res.status}`, errorText);
          throw new Error(`Fetch failed with status ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("📦 Options fetched from API:", data);
        setOptions(data);

        if (typeof selectPreloadedOption === 'function') {
          selectPreloadedOption(data);
        }
        else if (type !== 'class') {
          setSelectedSubrace?.(null);
        }
      })
      .catch(err => {
        console.error('Fetch error:', err.message);
        setOptions([]);
      });
  }

  return {
    saveCharacter,
    adjustClassLevel,
    saveLevelChange,
    saveStatChange,
    cancelLevelChange,
    confirmSelection,
    confirmMulticlassSelection,
    removeClass,
    fetchOverlayOptions,
    applyImmediateUpdate,
  };
}