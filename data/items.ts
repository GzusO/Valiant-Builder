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
    quantity: number;
}

export const armorData: Item[] = [
    //Armor Sets
    {name:'Light',tags:[],weight:10,cost:100,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Medium',tags:[],weight:20,cost:250,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy',tags:[],weight:35,cost:500,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Ultra-Heavy',tags:[],weight:50,cost:750,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},

    //Accessories 
    //Tier 0
    {name:'Backpack',tags:[],weight:4,cost:75,abilities:[],traits:[],tier:0,description:'',types:['Accessory'],quantity:1},
    {name:'Munition Pouch',tags:[],weight:1,cost:100,abilities:[],traits:[],tier:0,description:'',types:['Accessory'],quantity:1},
    {name:'Simple Charm',tags:[],weight:1,cost:50,abilities:[],traits:[],tier:0,description:'',types:['Accessory'],quantity:1},
    
    //Tier 1
    {name:'Arcanist\'s Mess Kit',tags:[],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:['Accessory'],quantity:1},
    {name:'Shepard\'s Compass',tags:[],weight:1,cost:1500,abilities:[],traits:[],tier:1,description:'',types:['Accessory'],quantity:1},
    {name:'Soothe Stone',tags:[],weight:1,cost:1250,abilities:[],traits:[],tier:1,description:'',types:['Accessory'],quantity:1},
    
    //Tier 2
    {name:'Gleaming Goggles',tags:[],weight:1,cost:4500,abilities:[],traits:[],tier:2,description:'',types:['Accessory'],quantity:1},
    {name:'Spelljammer\'s Bracer',tags:[],weight:2,cost:3500,abilities:[],traits:[],tier:2,description:'',types:['Accessory'],quantity:1},
    {name:'Quick Stone',tags:[],weight:1,cost:4000,abilities:[],traits:[],tier:2,description:'',types:['Accessory'],quantity:1},
    
    //Tier 3
    {name:'Mindspeak Amulet',tags:[],weight:0,cost:7500,abilities:[],traits:[],tier:3,description:'',types:['Accessory'],quantity:1},

    //Tier 4
    {name:'Arcane Communicator',tags:[],weight:2,cost:10000,abilities:[],traits:[],tier:4,description:'',types:['Accessory'],quantity:1},
    
    
];

export const gearData: Item[] = [
    //Tier 0
    {name:'Alarm System',tags:[],weight:15,cost:100,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Lantern',tags:[],weight:2,cost:50,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Trauma Kit',tags:[],weight:5,cost:100,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Pavise Shield',tags:[],weight:10,cost:75,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Fire Bomb',tags:[],weight:2,cost:50,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    
    //Tier 1
    {name:'Caffeinated Brew',tags:[],weight:1,cost:1500,abilities:[],traits:[],tier:1,description:'',types:[],quantity:1},
    {name:'Caltrops',tags:[],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:[],quantity:1},
    {name:'Flare',tags:[],weight:2,cost:1250,abilities:[],traits:[],tier:1,description:'',types:[],quantity:1},
    {name:'Smokescreen',tags:[],weight:2,cost:1000,abilities:[],traits:[],tier:1,description:'',types:[],quantity:1},
    {name:'Syrjha',tags:[],weight:1,cost:1250,abilities:[],traits:[],tier:1,description:'',types:[],quantity:1},
    
    
    //Tier 2
    {name:'Parachute',tags:[],weight:30,cost:3000,abilities:[],traits:[],tier:2,description:'',types:[],quantity:1},
    {name:'Stun Bomb',tags:[],weight:1,cost:4000,abilities:[],traits:[],tier:2,description:'',types:[],quantity:1},
    {name:'Witch-Hunter Charm',tags:[],weight:1,cost:3500,abilities:[],traits:[],tier:2,description:'',types:[],quantity:1},
    {name:'Crystalline',tags:[],weight:1,cost:3500,abilities:[],traits:[],tier:2,description:'',types:[],quantity:1},
    

    //Tier 3
    {name:'Arcane Flare',tags:[],weight:2,cost:6500,abilities:[],traits:[],tier:3,description:'',types:[],quantity:1},
    {name:'Draining Toxin',tags:[],weight:1,cost:7000,abilities:[],traits:[],tier:3,description:'',types:[],quantity:1},
    {name:'Lethal Toxin',tags:[],weight:1,cost:7000,abilities:[],traits:[],tier:3,description:'',types:[],quantity:1},
    {name:'Mindbreak',tags:[],weight:1,cost:7500,abilities:[],traits:[],tier:3,description:'',types:[],quantity:1},
    
];

export const weaponData: Item[] =[
    {name:'Blade',tags:['Melee'],weight:3,cost:250,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Blade',tags:['Melee','Two-Handed'],weight:4,cost:300,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Blade',tags:['Melee','Two-Handed','Heavy'],weight:10,cost:500,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    
    {name:'Club',tags:['Melee'],weight:3,cost:50,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Club',tags:['Melee','Two-Handed'],weight:5,cost:150,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Club',tags:['Melee','Two-Handed','Heavy'],weight:25,cost:300,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    
    {name:'Axe',tags:['Melee'],weight:6,cost:75,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Axe',tags:['Melee','Two-Handed'],weight:3,cost:200,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Axe',tags:['Melee','Two-Handed','Heavy'],weight:15,cost:400,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    
    {name:'Polearm',tags:['Melee','Reach 1'],weight:4,cost:75,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Bladed Polearm',tags:['Melee','Reach 1'],weight:4,cost:75,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Hybrid Polearm',tags:['Melee','Reach 1','Two-Handed'],weight:7,cost:150,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Polearm',tags:['Melee','Two-Handed','Reach 1'],weight:7,cost:200,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Bladed Polearm',tags:['Melee','Two-Handed','Reach 1'],weight:7,cost:200,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Hybrid Polearm',tags:['Melee','Two-Handed','Reach 1','Heavy'],weight:9,cost:300,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Polearm',tags:['Melee','Two-Handed','Reach 1','Heavy'],weight:9,cost:400,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Bladed Polearm',tags:['Melee','Two-Handed','Reach 1','Heavy'],weight:9,cost:400,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},

    {name:'Bow',tags:['Projectile','Two-Handed'],weight:3,cost:100,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Crossbow',tags:['Projectile','Two-Handed'],weight:8,cost:100,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Short Gun',tags:['Projectile','Two-Handed'],weight:3,cost:150,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Bow',tags:['Projectile','Two-Handed','Unwieldly'],weight:6,cost:200,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Crossbow',tags:['Projectile','Two-Handed','Unwieldly'],weight:12,cost:250,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Carbine',tags:['Projectile','Two-Handed','Unwieldly'],weight:5,cost:400,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Bow',tags:['Projectile','Two-Handed','Unwieldly','Heavy'],weight:12,cost:400,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Great Crossbow',tags:['Projectile','Two-Handed','Unwieldly','Heavy'],weight:18,cost:450,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Rifle',tags:['Projectile','Two-Handed','Unwieldly','Heavy'],weight:7,cost:500,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},

    {name:'Shield',tags:['Melee','Shield'],weight:6,cost:75,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Shield',tags:['Melee','Shield','Heavy'],weight:20,cost:250,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},
    
];