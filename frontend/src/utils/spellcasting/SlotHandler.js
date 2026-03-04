import { getClassSpellcastingProgression } from './SpellcastingProgression';
import { combineMulticlassSlots, getPactMagicSlots, getConduitMagicSlots } from './MulticlassHandler';

export function calculateSpellSlots(classes) {
  const classArray = Array.isArray(classes) ? classes : [classes];
  const result = {};

  let totalStandardCasterLevel = 0;

  const isSingleCaster =
    classArray.filter(cls => {
      const { type } = getClassSpellcastingProgression(cls);
      return type !== 'none' && type !== 'pact' && type !== 'points';
    }).length === 1;

  for (const cls of classArray) {
    const { type } = getClassSpellcastingProgression(cls);
    const level = cls.level;

    switch (type) {
      case 'full':
        totalStandardCasterLevel += level;
        break;
      case 'half':
        totalStandardCasterLevel += isSingleCaster
          ? Math.ceil(level / 2)
          : Math.floor(level / 2);
        break;
      case 'third':
        totalStandardCasterLevel += isSingleCaster
          ? Math.ceil(level / 3)
          : Math.floor(level / 3);
        break;
      case 'conduit':
        result.conduit = getConduitMagicSlots(level); // if you implement this
        break;
      case 'pact':
        result.pact = getPactMagicSlots(level);
        break;
      case 'points':
        // Future: implement spell point logic
        break;
    }
  }

  if (totalStandardCasterLevel > 0) {
    result.standard = combineMulticlassSlots(totalStandardCasterLevel);
  }

  return result;
}