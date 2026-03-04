export default function getBaseAC(character) {
  if (character.features?.includes("Mage Armor")) return 13;
  return 10;
}
