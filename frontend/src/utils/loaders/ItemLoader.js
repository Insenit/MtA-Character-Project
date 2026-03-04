let cachedItems = null;

const itemSources = [
  '/data/items/weapons.json',
  '/data/items/armor.json',
  '/data/items/gear.json',
  '/data/items/consumables.json',
  '/data/items/magic_items.json',
];

// Loads only one category
export async function loadItemsByCategory(category) {
  try {
    let path = '';
    switch (category) {
      case 'weapons':
        path = '/data/items/weapons.json';
        break;
      case 'armor':
        path = '/data/items/armor.json';
        break;
      case 'gear':
        path = '/data/items/gear.json';
        break;
      case 'consumables':
        path = '/data/items/consumables.json';
        break;
      case 'magic':
        path = '/data/items/magic_items.json';
        break;
      case 'all':
      default:
        // Load all categories if "all"
        if (!cachedItems) {
          const results = await Promise.all(
            itemSources.map(path =>
              fetch(path)
                .then(res => {
                  if (!res.ok) throw new Error(`HTTP ${res.status}`);
                  return res.json();
                })
                .catch(err => {
                  console.error(`Error loading ${path}:`, err);
                  return [];
                })
            )
          );
          cachedItems = results.flat();
        }
        return cachedItems;
    }

    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Failed to load items for category "${category}":`, error);
    return [];
  }
}

// Safely look up item details
export async function getItemDetailsById(id) {
  if (!cachedItems) {
    const results = await Promise.all(
      itemSources.map(path =>
        fetch(path)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
          })
          .catch(() => [])
        )
    );
    cachedItems = results.flat();
  }

  return cachedItems.find(item => item.id === id || item.name === id);
}