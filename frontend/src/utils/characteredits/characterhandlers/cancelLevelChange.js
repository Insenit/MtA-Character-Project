export function cancelLevelChange(character, pendingLevels, index) {
  const restoredLevels = [...pendingLevels];
  restoredLevels[index] = character.classes[index].level;
  return restoredLevels;
}