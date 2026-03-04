let allItems = [];

export async function initializeAllItems() {
  const paths = [
    '/data/items/weapons.json',
    '/data/items/armor.json',
    '/data/items/gear.json',
    '/data/items/consumables.json',
    '/data/items/magic_items.json',
  ];

  const promises = paths.map(path => fetch(path).then(res => res.json()));
  const results = await Promise.all(promises);

  allItems = results.flat();
}

export function getItemDetailsById(id) {
  return allItems.find(item => item.id === id);
}