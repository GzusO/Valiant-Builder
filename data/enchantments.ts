import { Ability } from "src/app/Ability";

export interface Enchantment {
    name: string;
    validItems: string[];
    cost: number;
    abilities: Ability[];
    tier: number;
    types: string[];
}

export const enchantmentData: Enchantment[] = [
    //Combat
        //Tier 0
        {name:'Focused',validItems:['Armor Sets'],cost:150,abilities:[],tier:0,types:['Combat']},
        {name:'Light-Casting',validItems:['Weapons','Armor Sets'],cost:100,abilities:[],tier:0,types:['Combat']},
        {name:'Staunching',validItems:['Armor Sets'],cost:100,abilities:[],tier:0,types:['Combat']},
        
        //Tier 1
        {name:'Hardened',validItems:['Armor Sets'],cost:1500,abilities:[],tier:1,types:['Combat']},
        {name:'Lethal',validItems:['Weapons'],cost:1500,abilities:[],tier:1,types:['Combat']},
        {name:'Resistant',validItems:['Armor Sets'],cost:1500,abilities:[],tier:1,types:['Combat']},
        
        //Tier 2
        {name:'Calming',validItems:['Armor Sets'],cost:3500,abilities:[],tier:2,types:['Combat']},
        {name:'Null Storage',validItems:['Weapons'],cost:3000,abilities:[],tier:2,types:['Combat']},
        {name:'Thorned',validItems:['Armor Sets'],cost:3500,abilities:[],tier:2,types:['Combat']},    
        
        //Tier 3
        {name:'Glasscharm',validItems:['Weapons'],cost:7000,abilities:[],tier:3,types:['Combat']},
        {name:'Invigorating',validItems:['Armor Sets'],cost:7500,abilities:[],tier:3,types:['Combat']},
        {name:'Reactive',validItems:['Armor Sets'],cost:7000,abilities:[],tier:3,types:['Combat']},
        
        //Tier 4
        {name:'Arc-Powered',validItems:['Armor Sets'],cost:13000,abilities:[],tier:4,types:['Combat']},
        {name:'Hyperlethal',validItems:['Weapons'],cost:15000,abilities:[],tier:4,types:['Combat']},
        {name:'Mercurial',validItems:['Armor Sets'],cost:12500,abilities:[],tier:4,types:['Combat']},
        
    //Utility
    {name:'Clean',validItems:['Weapons','Armor Sets'],cost:50,abilities:[],tier:0,types:['Utility']},
    {name:'Light',validItems:['Weapons','Armor Sets'],cost:100,abilities:[],tier:0,types:['Utility']},
    {name:'Regenerative',validItems:['Weapons','Armor Sets'],cost:250,abilities:[],tier:0,types:['Utility']},
    
];