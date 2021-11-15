import { Ability } from "src/app/Ability";

export interface Item {
    name: string;
    types: string[];
    tags: string[];
    weight: number;
    cost: number;
    abilities: Ability[];
    tier: number;
    description: string;
    quantity: number;
}
// Tier Cost
// 00   250
// 01   1,000
// 02   3,000
// 03   6,000
// 04   10,000
// 05   15,000
// 06   21,000
// 07   28,000
// 08   36,000
// 09   45,000
// 10   55,000


export const armorData: Item[] = [
    //Armor Sets
    {
        name: 'Armor',
        tags: [],
        weight: 20,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Armor'],
        quantity: 1
    },
    {
        name: 'Heavy Armor',
        tags: [],
        weight: 35,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Armor'],
        quantity: 1
    },

    //Accessories Combat
    //Tier 0
    {
        name: 'Munition Pouch',
        tags: [],
        weight: 1,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },
    {
        name: 'Simple Charm',
        tags: [],
        weight: 1,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },

    //Tier 1
    {
        name: 'Heart Protector',
        tags: [],
        weight: 7,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },
    {
        name: 'Quick Stone',
        tags: [],
        weight: 1,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },

    //Tier 2
    {
        name: 'Gleaming Goggles',
        tags: [],
        weight: 1,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },
    {
        name: 'Spelljammer\'s Bracer',
        tags: [],
        weight: 2,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },

    //Tier 3
    {
        name: 'Crystal Lens',
        tags: [],
        weight: 1,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },
    {
        name: 'Stoneheart Amulet',
        tags: [],
        weight: 3,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },
    //Tier 6
    {
        name: 'Chaos Badge',
        tags: [],
        weight: 1,
        cost: 21000,
        abilities: [],
        tier: 6,
        description: '',
        types: ['Combat Accessory'],
        quantity: 1
    },


    //Accessories Utility
    //Tier 0
    {
        name: 'Arcanist\'s Mess Kit',
        tags: [],
        weight: 2,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },
    {
        name: 'Backpack',
        tags: [],
        weight: 4,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },

    //Tier 1
    {
        name: 'Seafarer\'s Compass',
        tags: [],
        weight: 1,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },
    {
        name: 'Soothe Stone',
        tags: [],
        weight: 1,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },

    //Tier 2
    {
        name: 'Regenerative Garments',
        tags: [],
        weight: 5,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },
    {
        name: 'Shepard\'s Gloves',
        tags: [],
        weight: 1,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },

    //Tier 3
    {
        name: 'Arcane Communicator',
        tags: [],
        weight: 2,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },
    {
        name: 'Mindspeak Amulet',
        tags: [],
        weight: 0,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: ['Utility Accessory'],
        quantity: 1
    },

];

export const gearData: Item[] = [
    //Tier 0
    {
        name: 'Fire Bomb',
        tags: [],
        weight: 2,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Lantern',
        tags: [],
        weight: 2,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Caltrops',
        tags: [],
        weight: 2,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },

    //Tier 1
    {
        name: 'Flare',
        tags: [],
        weight: 2,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Syrjha',
        tags: [],
        weight: 1,
        cost: 1000,
        abilities: [],
        tier: 1,
        description: '',
        types: [],
        quantity: 1
    },

    //Tier 2
    {
        name: 'Caffeinated Brew',
        tags: [],
        weight: 1,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Parachute',
        tags: [],
        weight: 30,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Smokescreen',
        tags: [],
        weight: 2,
        cost: 3000,
        abilities: [],
        tier: 2,
        description: '',
        types: [],
        quantity: 1
    },

    //Tier 3
    {
        name: 'Arcane Flare',
        tags: [],
        weight: 2,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Crystal Mirror',
        tags: [],
        weight: 1,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Witch-Hunter Charm',
        tags: [],
        weight: 1,
        cost: 6000,
        abilities: [],
        tier: 3,
        description: '',
        types: [],
        quantity: 1
    },

    //Tier 4
    {
        name: 'Crystalline',
        tags: [],
        weight: 1,
        cost: 10000,
        abilities: [],
        tier: 4,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Lethal Toxin',
        tags: [],
        weight: 1,
        cost: 10000,
        abilities: [],
        tier: 4,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Stun Bomb',
        tags: [],
        weight: 1,
        cost: 10000,
        abilities: [],
        tier: 4,
        description: '',
        types: [],
        quantity: 1
    },

    //Tier 5
    {
        name: 'Mindbreak',
        tags: [],
        weight: 1,
        cost: 15000,
        abilities: [],
        tier: 5,
        description: '',
        types: [],
        quantity: 1
    },
    //Tier 6
    {
        name: 'Alchemist\'s Sin',
        tags: [],
        weight: 3,
        cost: 21000,
        abilities: [],
        tier: 6,
        description: '',
        types: [],
        quantity: 1
    },

];

export const weaponData: Item[] = [
    {
        name: 'Melee Weapon',
        tags: [],
        weight: 5,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Heavy Melee Weapon',
        tags: ['Two-Handed'],
        weight: 15,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Ranged Weapon',
        tags: ['Two-Handed'],
        weight: 3,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Heavy Ranged Weapon',
        tags: ['Two-Handed','Heavy'],
        weight: 10,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Shield',
        tags: [],
        weight: 6,
        cost: 75,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },
    {
        name: 'Heavy Shield',
        tags: ['Heavy'],
        weight: 20,
        cost: 250,
        abilities: [],
        tier: 0,
        description: '',
        types: [],
        quantity: 1
    },

];