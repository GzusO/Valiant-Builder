import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Armor {
    name: string;
    class: string;
    tags: string[];
    weight: number;
    cost: number;
    abilities: Ability[];
    traits: Trait[];
    tier: number;
}

export const armorData: Armor[] = [
    //Armor Sets
    {name:'Light',class:'Light',tags:['Size-Medium'],weight:10,cost:100,abilities:[],traits:[],tier:0},
    {name:'Medium',class:'Medium',tags:['Size-Medium'],weight:25,cost:250,abilities:[],traits:[],tier:0},
    {name:'Heavy',class:'Heavy',tags:['Size-Large'],weight:50,cost:500,abilities:[],traits:[],tier:0},
    {name:'Ultra-Heavy',class:'Ultra-Heavy',tags:['Size-Large'],weight:75,cost:1000,abilities:[],traits:[],tier:0},

    //Accessories 
    //Tier 0
    {name:'Backpack',class:'Accessory',tags:['Size-Medium'],weight:4,cost:75,abilities:[],traits:[],tier:0},
    {name:'Cloak',class:'Accessory',tags:['Size-Medium'],weight:4,cost:25,abilities:[],traits:[],tier:0},
    {name:'Necklace',class:'Accessory',tags:['Size-Small'],weight:0,cost:75,abilities:[],traits:[],tier:0},
    {name:'Ring',class:'Accessory',tags:['Size-Tiny'],weight:0,cost:75,abilities:[],traits:[],tier:0},
    {name:'Satchel',class:'Accessory',tags:['Size-Small'],weight:1,cost:25,abilities:[],traits:[],tier:0},
    {name:'Simple Charm',class:'Accessory',tags:['Size-Small'],weight:1,cost:50,abilities:[],traits:[],tier:0},
    
    //Tier 1
    {name:'Arcanist\'s Mess Kit',class:'Accessory',tags:['Size-Small'],weight:2,cost:1000,abilities:[],traits:[],tier:1},
    {name:'Shepard\'s Compass',class:'Accessory',tags:['Size-Small'],weight:1,cost:1500,abilities:[],traits:[],tier:1},
    {name:'Soothe Stone',class:'Accessory',tags:['Size-Small'],weight:1,cost:1250,abilities:[],traits:[],tier:1},
    
    //Tier 2
    {name:'Gleaming Headband',class:'Accessory',tags:['Size-Small'],weight:1,cost:4500,abilities:[],traits:[],tier:2},
    {name:'Spellhammer\'s Bracer',class:'Accessory',tags:['Size-Small'],weight:2,cost:3500,abilities:[],traits:[],tier:2},
    {name:'Quick Stone',class:'Accessory',tags:['Size-Small'],weight:1,cost:4000,abilities:[],traits:[],tier:2},
    
    //Tier 3
    {name:'Arcane Necklace',class:'Accessory',tags:['Size-Small'],weight:0,cost:6000,abilities:[],traits:[],tier:3},
    {name:'Arcane Ring',class:'Accessory',tags:['Size-Tiny'],weight:0,cost:6000,abilities:[],traits:[],tier:3},
    {name:'Mindspeak Amulet',class:'Accessory',tags:['Size-Small'],weight:0,cost:7500,abilities:[],traits:[],tier:3},
    
];