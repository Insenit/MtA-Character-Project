import getBaseAC from './baseAC';
import getArmorBonus from './armorBonus';
import getShieldBonus from './shieldBonus';
import getStatReplacement from './statReplacement';
import getFeatureBonuses from './featureBonuses';

export default function calculateFinalAC(character) {
  const baseAC = getBaseAC(character);
  const statMod = getStatReplacement(character);
  const armorBonus = getArmorBonus(character);
  const shieldBonus = getShieldBonus(character);
  const featureBonus = getFeatureBonuses(character);

  return baseAC + statMod + armorBonus + shieldBonus + featureBonus;
}