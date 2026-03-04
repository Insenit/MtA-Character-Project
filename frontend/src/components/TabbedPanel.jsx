import { useState } from 'react';
import CurrencyDisplay from './Inventory/CurrencyDisplay';
import ContainerDisplay from './Inventory/ContainerDisplay';
import { CurrencyOverlay, InventoryOverlay } from './Overlays';
import SpellcastingTab from './SpellTabs/SpellcastingTab';
import ExploitsTab from './Exploits/ExploitsTab';

const hasSpellcasting = (character) => {
  const slots = character.spellSlots || {};
  const hasSlotData = Object.values(slots).some(levels => levels && Object.values(levels).some(v => v > 0));

  const isLevel1Warlock = character.classes?.some(cls => cls.name === 'Warlock' && cls.level === 1);

  return hasSlotData || isLevel1Warlock;
};

const hasExploitAccess = (character) =>
  character.exploits?.totalDice > 0 && character.exploits?.dieType;

const TabbedPanel = ({ character, characterUpdater, onCharacterUpdate }) => {
  const [activeTab, setActiveTab] = useState('features');

const tabs = [
  { id: 'actions', label: 'Actions' },
  { id: 'features', label: 'Features' },
  ...(hasSpellcasting(character) ? [{ id: 'spells', label: 'Spells' }] : []),
  ...(hasExploitAccess(character) ? [{ id: 'exploits', label: 'Exploits' }] : []),
  { id: 'inventory', label: 'Inventory' },
];

  return (
    <div className="tabbed-panel-container">
      <div className="tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'features' && <FeaturesPanel character={character} />}
        {activeTab === 'spells' && <SpellcastingTab character={character} />}
        {activeTab === 'exploits' && <ExploitsTab character={character} characterUpdater={characterUpdater} />}
        {activeTab === 'inventory' && (
          <InventoryPanel
            character={character}
            characterUpdater={characterUpdater}
            onCharacterUpdate={onCharacterUpdate}
          />
        )}
        {activeTab === 'actions' && <ActionsPanel character={character} />}
      </div>
    </div>
  );
};

export default TabbedPanel;

const FeaturesPanel = ({ character }) => (
  <div>
    <h3>Class Features</h3>
    {/* Render class features based on class and level */}
  </div>
);

const InventoryPanel = ({ character, characterUpdater, onCharacterUpdate }) => {
  const [showCurrencyOverlay, setShowCurrencyOverlay] = useState(false);
  const [activeContainerId, setActiveContainerId] = useState(null);

  const handleEditCurrency = () => {
    setShowCurrencyOverlay(true);
  };

  const handleConfirmCurrency = (newCurrency) => {
    const updated = {
      ...character,
      inventory: {
        ...character.inventory,
        currency: newCurrency,
      },
    };

    characterUpdater.saveCharacter(updated);
    if (onCharacterUpdate) onCharacterUpdate(updated);
    setShowCurrencyOverlay(false);
  };

  const handleAddItem = (containerId) => {
    setActiveContainerId(containerId);
  };

  const handleCloseItemOverlay = () => {
    setActiveContainerId(null);
  };

  const handleIncrementItem = (containerId, itemIndex) => {
    const updatedContainers = character.inventory.containers.map(container => {
      if (container.id === containerId) {
        const updatedItems = [...container.items];
        updatedItems[itemIndex].quantity += 1;
        return { ...container, items: updatedItems };
      }
      return container;
    });

    const updatedCharacter = {
      ...character,
      inventory: { ...character.inventory, containers: updatedContainers }
    };

    characterUpdater.saveCharacter(updatedCharacter);
    if (onCharacterUpdate) onCharacterUpdate(updatedCharacter);
  };

  const handleDecrementItem = (containerId, itemIndex) => {
    const updatedContainers = character.inventory.containers.map(container => {
      if (container.id === containerId) {
        const updatedItems = [...container.items];
        const currentQty = updatedItems[itemIndex].quantity;
        if (currentQty > 1) {
          updatedItems[itemIndex].quantity -= 1;
        } else {
          updatedItems.splice(itemIndex, 1);
        }
        return { ...container, items: updatedItems };
      }
      return container;
    });

    const updatedCharacter = {
      ...character,
      inventory: { ...character.inventory, containers: updatedContainers }
    };

    characterUpdater.saveCharacter(updatedCharacter);
    if (onCharacterUpdate) onCharacterUpdate(updatedCharacter);
  };

  return (
    <div>
      <CurrencyDisplay currency={character.inventory?.currency} onEdit={handleEditCurrency}/>

      <ContainerDisplay
        containers={character.inventory?.containers}
        onAddItem={handleAddItem}
        onIncrementItem={handleIncrementItem}
        onDecrementItem={handleDecrementItem}
      />

      {showCurrencyOverlay && (
        <CurrencyOverlay
          character={character}
          characterUpdater={characterUpdater}
          onCharacterUpdate={onCharacterUpdate}
          onCancel={() => setShowCurrencyOverlay(false)}
          onConfirm={handleConfirmCurrency}
        />
      )}

      {activeContainerId && (
        <InventoryOverlay
          character={character}
          characterUpdater={characterUpdater}
          containerId={activeContainerId}
          onCancel={handleCloseItemOverlay}
          onConfirm={(updatedCharacter) => {
            characterUpdater.saveCharacter(updatedCharacter);
            onCharacterUpdate(updatedCharacter);
            handleCloseItemOverlay();
          }}
        />
      )}
    </div>
  );
};

const ActionsPanel = ({ character }) => (
  <div>
    <h3>Actions</h3>
    {/* Attacks, abilities, etc. */}
  </div>
);