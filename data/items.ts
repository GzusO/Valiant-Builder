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

export const armorData: Item[] = [
    //Armor Sets
    {name:'Light Armor',tags:[],weight:10,cost:100,abilities:[],tier:0,description:'',types:['Armor'],quantity:1},
    {name:'Medium Armor',tags:[],weight:20,cost:250,abilities:[],tier:0,description:'',types:['Armor'],quantity:1},
    {name:'Heavy Armor',tags:[],weight:35,cost:400,abilities:[],tier:0,description:'',types:['Armor'],quantity:1},

    //Accessories Combat
    //Tier 0
    {name:'Munition Pouch',tags:[],weight:1,cost:100,abilities:[],tier:0,description:'',types:['Combat Accessory'],quantity:1},
    {name:'Simple Charm',tags:[],weight:1,cost:100,abilities:[],tier:0,description:'',types:['Combat Accessory'],quantity:1},
    
    //Tier 1
    {name:'Heart Protector',tags:[],weight:2,cost:1250,abilities:[],tier:1,description:'',types:['Combat Accessory'],quantity:1},
    {name:'Padded Cloak',tags:[],weight:2,cost:1500,abilities:[],tier:1,description:'',types:['Combat Accessory'],quantity:1},

    //Tier 2
    {name:'Gleaming Goggles',tags:[],weight:1,cost:4000,abilities:[],tier:2,description:'',types:['Combat Accessory'],quantity:1},
    {name:'Spelljammer\'s Bracer',tags:[],weight:2,cost:3500,abilities:[],tier:2,description:'',types:['Combat Accessory'],quantity:1},
    
    //Tier 3
    {name:'Light Stone',tags:[],weight:1,cost:7500,abilities:[],tier:3,description:'',types:['Combat Accessory'],quantity:1},
    {name:'Quick Stone',tags:[],weight:1,cost:7500,abilities:[],tier:3,description:'',types:['Combat Accessory'],quantity:1},
    

    //Accessories Utility
    //Tier 0
    {name:'Arcanist\'s Mess Kit',tags:[],weight:2,cost:100,abilities:[],tier:0,description:'',types:['Utility Accessory'],quantity:1},
    {name:'Backpack',tags:[],weight:4,cost:75,abilities:[],tier:0,description:'',types:['Utility Accessory'],quantity:1},
    
    //Tier 1
    {name:'Seafarer\'s Compass',tags:[],weight:1,cost:1000,abilities:[],tier:1,description:'',types:['Utility Accessory'],quantity:1},
    {name:'Soothe Stone',tags:[],weight:1,cost:1250,abilities:[],tier:1,description:'',types:['Utility Accessory'],quantity:1},
    
    //Tier 2
    {name:'Regenerative Garments',tags:[],weight:5,cost:3000,abilities:[],tier:2,description:'',types:['Utility Accessory'],quantity:1},
    {name:'Shepard\'s Gloves',tags:[],weight:1,cost:3000,abilities:[],tier:2,description:'',types:['Utility Accessory'],quantity:1},
    
    //Tier 3
    {name:'Arcane Communicator',tags:[],weight:2,cost:8000,abilities:[],tier:3,description:'',types:['Utility Accessory'],quantity:1},
    {name:'Mindspeak Amulet',tags:[],weight:0,cost:7500,abilities:[],tier:3,description:'',types:['Utility Accessory'],quantity:1},
    
];

export const gearData: Item[] = [
    //Tier 0
    {name:'Fire Bomb',tags:[],weight:2,cost:75,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Lantern',tags:[],weight:2,cost:50,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Pavise Shield',tags:[],weight:10,cost:100,abilities:[],tier:0,description:'',types:[],quantity:1},
    
    //Tier 1
    {name:'Caltrops',tags:[],weight:2,cost:1000,abilities:[],tier:1,description:'',types:[],quantity:1},
    {name:'Flare',tags:[],weight:2,cost:1250,abilities:[],tier:1,description:'',types:[],quantity:1},
    {name:'Syrjha',tags:[],weight:1,cost:1250,abilities:[],tier:1,description:'',types:[],quantity:1},
    
    //Tier 2
    {name:'Caffeinated Brew',tags:[],weight:1,cost:3000,abilities:[],tier:2,description:'',types:[],quantity:1},
    {name:'Parachute',tags:[],weight:30,cost:3000,abilities:[],tier:2,description:'',types:[],quantity:1},
    {name:'Smokescreen',tags:[],weight:2,cost:3500,abilities:[],tier:2,description:'',types:[],quantity:1},

    //Tier 3
    {name:'Arcane Flare',tags:[],weight:2,cost:6500,abilities:[],tier:3,description:'',types:[],quantity:1},
    {name:'Crystal Mirror',tags:[],weight:1,cost:7500,abilities:[],tier:3,description:'',types:[],quantity:1},
    {name:'Witch-Hunter Charm',tags:[],weight:1,cost:7000,abilities:[],tier:3,description:'',types:[],quantity:1},

    //Tier 4
    {name:'Crystalline',tags:[],weight:1,cost:11000,abilities:[],tier:4,description:'',types:[],quantity:1},
    {name:'Lethal Toxin',tags:[],weight:1,cost:10000,abilities:[],tier:4,description:'',types:[],quantity:1},
    {name:'Stun Bomb',tags:[],weight:1,cost:10500,abilities:[],tier:4,description:'',types:[],quantity:1},
    
    //Tier 5
    {name:'Mindbreak',tags:[],weight:1,cost:15000,abilities:[],tier:5,description:'',types:[],quantity:1},
    
];

export const weaponData: Item[] =[
    {name:'Blade',tags:[],weight:3,cost:250,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Blade',tags:['Two-Handed'],weight:4,cost:300,abilities:[],tier:0,description:'',types:[],quantity:1},
    
    {name:'Club',tags:[],weight:3,cost:50,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Club',tags:['Two-Handed'],weight:5,cost:150,abilities:[],tier:0,description:'',types:[],quantity:1},
    
    
    {name:'Axe',tags:[],weight:6,cost:75,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Axe',tags:['Two-Handed'],weight:3,cost:200,abilities:[],tier:0,description:'',types:[],quantity:1},
    
    
    {name:'Polearm',tags:['Reach 1', 'Two-Handed'],weight:7,cost:200,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Polearm',tags:['Reach 1','Two-Handed','Heavy'],weight:9,cost:400,abilities:[],tier:0,description:'',types:[],quantity:1},

    {name:'Bow',tags:['Two-Handed'],weight:3,cost:100,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Bow',tags:['Two-Handed','Unwieldly'],weight:6,cost:200,abilities:[],tier:0,description:'',types:[],quantity:1},
   

    {name:'Crossbow',tags:['Two-Handed'],weight:8,cost:100,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Crossbow',tags:['Two-Handed','Unwieldly'],weight:12,cost:250,abilities:[],tier:0,description:'',types:[],quantity:1},
   

    {name:'Firearm',tags:['Two-Handed'],weight:3,cost:150,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Firearm',tags:['Two-Handed','Unwieldly'],weight:5,cost:400,abilities:[],tier:0,description:'',types:[],quantity:1},
   

    {name:'Shield',tags:[],weight:6,cost:75,abilities:[],tier:0,description:'',types:[],quantity:1},
    {name:'Heavy Shield',tags:['Heavy'],weight:20,cost:250,abilities:[],tier:0,description:'',types:[],quantity:1},
    
];