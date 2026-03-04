import { StatOverlay, RaceOverlay, ClassOverlay, BackgroundOverlay, SubclassOverlay } from './index';

export default function OverlayController({
  type,
  show,
  character,
  options,
  selectedOption,
  setSelectedOption,
  selectedSubrace,
  setSelectedSubrace,
  onConfirm,
  onCancel,
  allowMulticlass,
  onMulticlass,
  characterUpdater,
  onCharacterUpdate,
  selectedClassIndex,
  subclassOverlayClass,
  subclassOverlayTargetIndex
}) {

  console.log("🔍 OverlayController called", { type, show });
  
  if (!show || !type) return null;

  if (type === 'stats') {
    return (
      <StatOverlay
        character={character}
        characterUpdater={characterUpdater}
        closeOverlay={onCancel}
        onCharacterUpdate={onCharacterUpdate}
      />
    );
  }

  if (type === 'race') {
    return (
      <RaceOverlay
        options={options}
        selected={selectedOption}
        setSelected={setSelectedOption}
        selectedSubrace={selectedSubrace}
        setSelectedSubrace={setSelectedSubrace}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
  }

  if (type === 'class') {
    return (
      <ClassOverlay
        options={options}
        selected={selectedOption}
        setSelected={setSelectedOption}
        onConfirm={(...args) => onConfirm(...args, selectedClassIndex)}
        replaceIndex={selectedClassIndex}
        onCancel={onCancel}
        allowMulticlass={allowMulticlass}
        onMulticlass={onMulticlass}
      />
    );
  }

  if (type === 'background') {
    return (
      <BackgroundOverlay
        options={options}
        selected={selectedOption}
        setSelected={setSelectedOption}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
  }

  if (type === 'subclass') {
    return (
      <SubclassOverlay
        className={subclassOverlayClass}
        selected={selectedOption}
        setSelected={setSelectedOption}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
  }

  return null;
}
