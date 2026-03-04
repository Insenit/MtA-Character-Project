import spellSlotTable from '../../data/SpellSlotTable.json';
import conduitSlotTable from '../../data/ConduitSlotTable.json';
import pactSlotTable from '../../data/PactSlotTable.json';

export function combineMulticlassSlots(standardLevel) {
  const progression = spellSlotTable.standard[standardLevel] || [];
  const slotData = {};

  progression.forEach((slots, index) => {
    if (slots > 0) slotData[index + 1] = slots;
  });

  return slotData;
}

export function getPactMagicSlots(level) {
  const entry = pactSlotTable.pact?.[String(level)];
  if (!entry) return {};

  return {
    [entry.slotLevel]: entry.slots,
  };
}

export function getConduitMagicSlots(level) {
  const entry = conduitSlotTable.pact?.[String(level)];
  if (!entry) return {};

  return {
    [entry.slotLevel]: entry.slots,
  };
}