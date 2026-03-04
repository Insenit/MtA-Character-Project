import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterHeader from "../components/CharacterHeader";
import CharacterSidebar from "../components/CharacterSidebar";
import CharacterStatsBar from "../components/CharacterStatsBar";
import SkillList from "../components/SkillList";
import TabbedPanel from "../components/TabbedPanel";
import CharacterUpdater from '../utils/characteredits/CharacterUpdater';
import OverlayController from "../components/Overlays/OverlayController";

export default function CharacterView({ characters, setCharacters }) {
  const { id } = useParams();
  const characterId = id.toString();

  const [character, setCharacter] = useState(null);
  const [pendingLevels, setPendingLevels] = useState([]);
  const [confirmingLevelChangeIndex, setConfirmingLevelChangeIndex] = useState(null);

  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayType, setOverlayType] = useState(null);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubrace, setSelectedSubrace] = useState(null);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);

  const [subclassOverlayClass, setSubclassOverlayClass] = useState(null);
  const [subclassOverlayTargetIndex, setSubclassOverlayTargetIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("characters");
    const loadedCharacters = stored ? JSON.parse(stored) : characters;
    const found = loadedCharacters.find(c => c.id.toString() === characterId);
    setCharacter(found);
    if (found) {
      setPendingLevels(found.classes.map(cls => cls.level));
    }
  }, [characterId, characters]);

  if (!character) return <div className="container">Character not found.</div>;

  const characterUpdater = CharacterUpdater(characters, setCharacters, characterId);
  const {
    saveCharacter,
    applyImmediateUpdate,
    adjustClassLevel,
    saveLevelChange,
    cancelLevelChange,
    confirmSelection,
    confirmMulticlassSelection,
    removeClass,
    fetchOverlayOptions,
  } = characterUpdater;

  const openOverlay = (type, index = null) => {
    setOverlayType(type);
    setShowOverlay(true);

    if (type === 'class' && index !== null) {
      setSelectedClassIndex(index);
      const existingClass = character.classes?.[index];

      fetchOverlayOptions(
        type,
        setOptions,
        character,
        (fetchedOptions) => {
          const match = existingClass
            ? fetchedOptions.find(opt => opt.name === existingClass.name)
            : null;
          setSelectedOption(match || null);
        },
        setSelectedSubrace
      );
    } else {
      fetchOverlayOptions(type, setOptions, character, setSelectedOption, setSelectedSubrace);
    }
  };

  const openSubclassOverlay = (className, classIndex) => {
    setSubclassOverlayClass(className);
    setSubclassOverlayTargetIndex(classIndex);
    setOverlayType("subclass");
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayType(null);
    setOptions([]);
    setSelectedOption(null);
    setSelectedSubrace(null);
  };

  const closeOverlayFn = () => setShowOverlay(false);

  return (
    <div className="character-layout">
      <CharacterHeader character={character} saveCharacter={saveCharacter} />
      <CharacterStatsBar character={character} onClick={() => openOverlay("stats")} />

      <CharacterSidebar
        character={character}
        setCharacter={setCharacter}
        characters={characters}
        setCharacters={setCharacters}
        applyImmediateUpdate={applyImmediateUpdate}
        pendingLevels={pendingLevels}
        confirmingLevelChangeIndex={confirmingLevelChangeIndex}
        openOverlay={openOverlay}
        openSubclassOverlay={openSubclassOverlay}
        adjustClassLevel={(index, change) => {
          const newLevels = adjustClassLevel(pendingLevels, index, change);
          setPendingLevels(newLevels);
          setConfirmingLevelChangeIndex(index);
        }}
        saveLevelChange={(index) => {
          saveLevelChange(character, pendingLevels, index);
          setConfirmingLevelChangeIndex(null);
        }}
        cancelLevelChange={(index) => {
          const restored = cancelLevelChange(character, pendingLevels, index);
          setPendingLevels(restored);
          setConfirmingLevelChangeIndex(null);
        }}
        removeClass={(index) => {
          const updated = removeClass(character, pendingLevels, index);
          setPendingLevels(updated);
        }}
      />

      <div className="character-main-body">
        <div className="skill-column">
          <SkillList character={character} />
        </div>
        <div className="tabbed-panel-column">
          <TabbedPanel
            character={character}
            characterUpdater={characterUpdater}
            onCharacterUpdate={setCharacter}
          />
        </div>
      </div>

      <OverlayController
        type={overlayType}
        show={showOverlay}
        character={character}
        characterUpdater={characterUpdater}
        onCharacterUpdate={setCharacter}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectedSubrace={selectedSubrace}
        setSelectedSubrace={setSelectedSubrace}
        onConfirm={() =>
          confirmSelection(
            character,
            selectedOption,
            overlayType,
            selectedSubrace,
            closeOverlayFn,
            overlayType === 'subclass' ? subclassOverlayTargetIndex : selectedClassIndex,
            saveCharacter
          )
        }
        onCancel={closeOverlay}
        allowMulticlass={overlayType === 'class'}
        onMulticlass={() => confirmMulticlassSelection(character, selectedOption, closeOverlay)}
        selectedClassIndex={selectedClassIndex}
        subclassOverlayClass={subclassOverlayClass}
        subclassOverlayTargetIndex={subclassOverlayTargetIndex}
      />
    </div>
  );
}
