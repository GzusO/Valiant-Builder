import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Item {
    name: string;
    types: string[];
    tags: string[];
    weight: number;
    cost: number;
    abilities: Ability[];
    traits: Trait[];
    tier: number;
    description: string;
}

export const armorData: Item[] = [
    //Armor Sets
    {name:'Light',tags:['Size-Medium'],weight:10,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Medium',tags:['Size-Medium'],weight:25,cost:250,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy',tags:['Size-Large'],weight:50,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Ultra-Heavy',tags:['Size-Large'],weight:75,cost:1000,abilities:[],traits:[],tier:0,description:'',types:[]},

    //Accessories 
    //Tier 0
    {name:'Backpack',tags:['Size-Medium',],weight:4,cost:75,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    {name:'Cloak',tags:['Size-Medium',],weight:4,cost:25,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    {name:'Necklace',tags:['Size-Small'],weight:0,cost:75,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    {name:'Ring',tags:['Size-Tiny'],weight:0,cost:75,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    {name:'Satchel',tags:['Size-Small'],weight:1,cost:25,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    {name:'Simple Charm',tags:['Size-Small'],weight:1,cost:50,abilities:[],traits:[],tier:0,description:'',types:['Accessory']},
    
    //Tier 1
    {name:'Arcanist\'s Mess Kit',tags:['Size-Small'],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:['Accessory']},
    {name:'Shepard\'s Compass',tags:['Size-Small'],weight:1,cost:1500,abilities:[],traits:[],tier:1,description:'',types:['Accessory']},
    {name:'Soothe Stone',tags:['Size-Small'],weight:1,cost:1250,abilities:[],traits:[],tier:1,description:'',types:['Accessory']},
    
    //Tier 2
    {name:'Gleaming Headband',tags:['Size-Small'],weight:1,cost:4500,abilities:[],traits:[],tier:2,description:'',types:['Accessory']},
    {name:'Spelljammer\'s Bracer',tags:['Size-Small'],weight:2,cost:3500,abilities:[],traits:[],tier:2,description:'',types:['Accessory']},
    {name:'Quick Stone',tags:['Size-Small'],weight:1,cost:4000,abilities:[],traits:[],tier:2,description:'',types:['Accessory']},
    
    //Tier 3
    {name:'Arcane Necklace',tags:['Size-Small'],weight:0,cost:6000,abilities:[],traits:[],tier:3,description:'',types:['Accessory']},
    {name:'Arcane Ring',tags:['Size-Tiny'],weight:0,cost:6000,abilities:[],traits:[],tier:3,description:'',types:['Accessory']},
    {name:'Mindspeak Amulet',tags:['Size-Small'],weight:0,cost:7500,abilities:[],traits:[],tier:3,description:'',types:['Accessory']},
    
];

export const gearData: Item[] = [
    //Tier 0
    {name:'Alarm System',tags:['Size-Large','Wielded 2','Consumable 1'],weight:15,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Lantern',tags:['Size-Small','Wielded 1','Worn'],weight:2,cost:50,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Trauma Kit',tags:['Size-Small','Wielded 2','Consumable 1'],weight:5,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Pavise Shield',tags:['Size-Large','Wielded 2,','Consumable 1'],weight:10,cost:75,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    //Tier 1
    {name:'Caffeinated Brew',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:1500,abilities:[],traits:[],tier:1,description:'',types:[]},
    {name:'Caltrops',tags:['Size-Small','Wielded 1','Consumable 3'],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:[]},
    {name:'Flare',tags:['Size-Small','Wielded 1','Consumable 3'],weight:2,cost:1250,abilities:[],traits:[],tier:1,description:'',types:[]},
    {name:'Smokescreen',tags:['Size-Small','Wielded 1','Consumable 1'],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:[]},
    {name:'Syrjha',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:1250,abilities:[],traits:[],tier:1,description:'',types:[]},
    
    
    //Tier 2
    {name:'Parachute',tags:['Size-Medium','Worn','Consumable 1'],weight:30,cost:3000,abilities:[],traits:[],tier:2,description:'',types:[]},
    {name:'Stun Bomb',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:4000,abilities:[],traits:[],tier:2,description:'',types:[]},
    {name:'Witch-Hunter Charm',tags:['Size-Small','Arcane','Wielded 1'],weight:1,cost:3500,abilities:[],traits:[],tier:2,description:'',types:[]},
    {name:'Crystalline',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:3500,abilities:[],traits:[],tier:2,description:'',types:[]},
    

    //Tier 3
    {name:'Arcane Flare',tags:['Size-Small','Arcane','Wielded 1','Consumable 2'],weight:2,cost:6500,abilities:[],traits:[],tier:3,description:'',types:[]},
    {name:'Draining Toxin',tags:['Size-Small','Wielded 2','Consumable 1'],weight:1,cost:7000,abilities:[],traits:[],tier:3,description:'',types:[]},
    {name:'Lethal Toxin',tags:['Size-Small','Wielded 2','Consumable 1'],weight:1,cost:7000,abilities:[],traits:[],tier:3,description:'',types:[]},
    {name:'Mindbreak',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:7500,abilities:[],traits:[],tier:3,description:'',types:[]},
    
    
    //Tier 4
    {name:'Arcane Communicator',tags:['Size-Small','Arcane','Wielded 1'],weight:2,cost:10000,abilities:[],traits:[],tier:4,description:'',types:[]},
    
];

export const weaponData: Item[] =[
    {name:'Short Blade',tags:['Size-Small','Melee'],weight:2,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Long Blade',tags:['Size-Medium','Melee'],weight:3,cost:250,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Blade',tags:['Size-Large','Melee','Two-Handed'],weight:4,cost:300,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Great Blade',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:10,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    {name:'Club',tags:['Size-Medium','Melee'],weight:3,cost:50,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Club',tags:['Size-Medium','Melee','Two-Handed'],weight:5,cost:150,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Great Club',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:25,cost:300,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    {name:'Axe',tags:['Size-Medium','Melee'],weight:6,cost:75,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Axe',tags:['Size-Large','Melee','Two-Handed'],weight:3,cost:200,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Great Axe',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:15,cost:400,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    {name:'Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:4,cost:75,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Bladed Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:4,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Hybrid Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:5,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:7,cost:200,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Bladed Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:7,cost:250,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Hybrid Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:9,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    {name:'Bow',tags:['Size-Medium','Projectile 8','Two-Handed'],weight:3,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Crossbow',tags:['Size-Medium','Projectile 8','Two-Handed'],weight:8,cost:100,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Short Gun',tags:['Size-Small','Projectile 8','Two-Handed'],weight:3,cost:150,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Arcane Short Gun',tags:['Size-Small','Arcane','Projectile 6','Reach 3','Two-Handed'],weight:5,cost:250,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Bow',tags:['Size-Large','Projectile 6','Two-Handed','Unwieldly'],weight:6,cost:200,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Heavy Crossbow',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:12,cost:250,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Carbine',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:5,cost:400,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Arcane Carbine',tags:['Size-Medium','Arcane','Projectile 3','Reach 5','Two-Handed','Unwieldly'],weight:10,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Great Bow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:12,cost:400,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Great Crossbow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:18,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Rifle',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:7,cost:600,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Arcane Rifle',tags:['Size-Large','Arcane','Projectile 2','Reach 10','Two-Handed','Unwieldly','Heavy'],weight:15,cost:750,abilities:[],traits:[],tier:0,description:'',types:[]},
    
    {name:'Small Shield',tags:['Size-Small','Melee','Shield'],weight:5,cost:75,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Medium Shield',tags:['Size-Medium','Melee','Shield'],weight:6,cost:75,abilities:[],traits:[],tier:0,description:'',types:[]},
    {name:'Large Shield',tags:['Size-Large','Melee','Shield','Heavy'],weight:20,cost:500,abilities:[],traits:[],tier:0,description:'',types:[]},
    
];