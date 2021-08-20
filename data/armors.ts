import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";
import { weaponClassData } from "./weaponClasses";

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
    {name:'Leather',class:'Light',tags:['Size-Medium'],weight:10,cost:100,abilities:[],traits:[],tier:0},
    {name:'Gambeson',class:'Light',tags:['Size-Medium'],weight:15,cost:250,abilities:[],traits:[],tier:0},
    {name:'Partial Plate',class:'Medium',tags:['Size-Medium'],weight:25,cost:500,abilities:[],traits:[],tier:0},
    {name:'Chain Mail',class:'Medium',tags:['Size-Medium'],weight:35,cost:300,abilities:[],traits:[],tier:0},
    {name:'Brigandine',class:'Heavy',tags:['Size-Large'],weight:40,cost:750,abilities:[],traits:[],tier:0},
    {name:'Full Plate',class:'Heavy',tags:['Size-Large'],weight:50,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Layered Plate',class:'Ultra-Heavy',tags:['Size-Large'],weight:75,cost:1500,abilities:[],traits:[],tier:0},

    //Barding Sets
    {name:'Strap Barding',class:'Light',tags:[],weight:10,cost:100,abilities:[],traits:[],tier:0},
    {name:'Light Barding',class:'Light',tags:[],weight:15,cost:250,abilities:[],traits:[],tier:0},
    {name:'Partial Plate Barding',class:'Medium',tags:[],weight:35,cost:500,abilities:[],traits:[],tier:0},
    {name:'Chain Barding',class:'Medium',tags:[],weight:35,cost:300,abilities:[],traits:[],tier:0},
    {name:'Heavy Barding',class:'Heavy',tags:[],weight:40,cost:750,abilities:[],traits:[],tier:0},
    {name:'Full Plate Barding',class:'Heavy',tags:[],weight:50,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Layered Plate Barding',class:'Ultra-Heavy',tags:[],weight:75,cost:1500,abilities:[],traits:[],tier:0},

    //Accessories 
    //Tier 0
    {name:'Backpack',class:'Accessory',tags:['Size-Medium'],weight:4,cost:250,abilities:[],traits:[],tier:0},
    {name:'Cloak',class:'Accessory',tags:['Size-Medium'],weight:4,cost:250,abilities:[],traits:[],tier:0},
    {name:'Necklace',class:'Accessory',tags:['Size-Small'],weight:0,cost:500,abilities:[],traits:[],tier:0},
    {name:'Ring',class:'Accessory',tags:['Size-Tiny'],weight:0,cost:500,abilities:[],traits:[],tier:0},
    {name:'Satchel',class:'Accessory',tags:['Size-Small'],weight:1,cost:100,abilities:[],traits:[],tier:0},
    {name:'Simple Charm',class:'Accessory',tags:['Size-Small'],weight:1,cost:100,abilities:[],traits:[],tier:0},
    
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