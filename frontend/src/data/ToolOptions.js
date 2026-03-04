export const artisanTools = [
    "Alchemist's Supplies", 
    "Brewer's Supplies", 
    "Calligrapher's Supplies", 
    "Carpenter's Tools", 
    "Cartographer's Tools", 
    "Cobbler's Tools", 
    "Cook's Utensils", 
    "Glassblower's Tools", 
    "Jeweler's Tools", 
    "Leatherworker's Tools", 
    "Mason's Tools", 
    "Painter's Supplies", 
    "Potter's Tools", 
    "Smith's Tools", 
    "Tinker's Tools", 
    "Weaver's Tools", 
    "Woodcarver's Tools"
]

export const musicalInstruments = [
    "Bagpipes", 
    "Birdpipes", 
    "Clarinet", 
    "Drum", 
    "Dulcimer", 
    "Fiddle", 
    "Flute", 
    "Glaur", 
    "Hand Drum", 
    "Harp", 
    "Horn", 
    "Longhorn", 
    "Lute", 
    "Lyre", 
    "Pan Flute", 
    "Shawm", 
    "Songhorn", 
    "Tanatan", 
    "Trumpet", 
    "Viol", 
    "Wargong", 
    "Yarting", 
    "Zulkoon"
]

export const gamingSets = [
    "Dice Set", 
    "Dragonchess Set", 
    "Playing Card Set", 
    "Three-Dragon Ante Set"
]

export const generalTools = [
    "Disguise Kit",
    "Forgery Kit",
    "Herbalism Kit",
    "Navigator's Tools",
    "Poisoner's Kit",
    "Thieves' Tools",
    "Vehicles (Land)",
    "Vehicles (Water)"
]

export const artisansAndInstrumentOptions = [
    ...artisanTools,
    ...musicalInstruments
].sort((a, b) => a.localeCompare(b));

export const allToolOptions = [
  ...artisanTools,
  ...musicalInstruments,
  ...gamingSets,
  ...generalTools
].sort((a, b) => a.localeCompare(b));