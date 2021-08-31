import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Enchantment {
    name: string;
    validItems: string[];
    cost: number;
    traits: Trait[];
    abilities: Ability[];
    tier: number;
}

export const enchantmentData: Enchantment[] = [
    //Combat
    //Tier 0
    {name:'Focused',validItems:['Armor Sets'],cost:150,abilities:[],traits:[],tier:0},
    {name:'Invigorating',validItems:['Armor Sets'],cost:250,abilities:[],traits:[],tier:0},
    {name:'Staunching',validItems:['Armor Sets'],cost:100,abilities:[],traits:[],tier:0},
    
    
    //Tier 1
    {name:'Forceful',validItems:['Weapons'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Hardened',validItems:['Armor Sets'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Lethal',validItems:['Weapons'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Light-Casting',validItems:['Weapons','Armor Sets'],cost:1000,abilities:[],traits:[],tier:1},
    {name:'Resistant',validItems:['Armor Sets'],cost:1500,abilities:[],traits:[],tier:1},
    
    //Tier 2
    {name:'Calming',validItems:['Armor Sets'],cost:3500,abilities:[],traits:[],tier:2},
    {name:'Null Storage',validItems:['Weapons'],cost:3000,abilities:[],traits:[],tier:2},
    
    //Tier 3
    {name:'Glasscharm',validItems:['Weapons'],cost:7000,abilities:[],traits:[],tier:3},
    {name:'Ragecharm',validItems:['Weapons'],cost:7000,abilities:[],traits:[],tier:3},
    
    //Tier 4
    {name:'Hyperlethal',validItems:['Weapons'],cost:15000,abilities:[],traits:[],tier:4},
    {name:'Mecurial',validItems:['Armor Sets'],cost:12500,abilities:[],traits:[],tier:4},

    //Utility
    //Tier 0
    {name:'Cleanliness',validItems:['Weapons','Armor Sets'],cost:75,abilities:[],traits:[],tier:0},
    {name:'Lightness',validItems:['Weapons','Armor Sets'],cost:50,abilities:[],traits:[],tier:0},
    {name:'Providing',validItems:['Armor Sets'],cost:100,abilities:[],traits:[],tier:0},
    
    //Tier 2
    {name:'Elegance',validItems:['Armor Sets'],cost:4000,abilities:[],traits:[],tier:2},
    {name:'Flight',validItems:['Armor Sets'],cost:3000,abilities:[],traits:[],tier:2},

];