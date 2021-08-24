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
    //Tier 0
    {name:'Cleanliness',validItems:['All Items'],cost:75,abilities:[],traits:[],tier:0},
    {name:'Invigorating',validItems:['Armor Sets','Accessories'],cost:250,abilities:[],traits:[],tier:0},
    {name:'Lightness',validItems:['Weapons','Armor Sets','Accessories'],cost:50,abilities:[],traits:[],tier:0},
    {name:'Providing',validItems:['Accessories with container trait'],cost:100,abilities:[],traits:[],tier:0},
    
    //Tier 1
    {name:'Forceful',validItems:['Weapons'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Hardened',validItems:['Armor Sets'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Lethal',validItems:['Weapons'],cost:1500,abilities:[],traits:[],tier:1},
    {name:'Light-Casting',validItems:['Weapons'],cost:1000,abilities:[],traits:[],tier:1},
    {name:'Resistant',validItems:['Armor Sets'],cost:1500,abilities:[],traits:[],tier:1},
    
    //Tier 2
    {name:'Dense',validItems:['Gear with consumable tag'],cost:4750,abilities:[],traits:[],tier:2},
    {name:'Elegance',validItems:['Accessories'],cost:4000,abilities:[],traits:[],tier:2},
    {name:'Flight',validItems:['Accessories'],cost:3000,abilities:[],traits:[],tier:2},
    {name:'Staunching',validItems:['Armor Sets'],cost:3000,abilities:[],traits:[],tier:2},
    {name:'Storage',validItems:['Accessories with the container trait','Containers'],cost:4500,abilities:[],traits:[],tier:2},
    
    //Tier 3
    {name:'Calming',validItems:['Armor Sets','Accessories'],cost:6000,abilities:[],traits:[],tier:3},
    {name:'Glasscharm',validItems:['Weapons'],cost:7000,abilities:[],traits:[],tier:3},
    {name:'Null Storage',validItems:['Weapons','Gear with the Wielded tag'],cost:6000,abilities:[],traits:[],tier:3},
    {name:'Ragecharm',validItems:['Weapons'],cost:7000,abilities:[],traits:[],tier:3},
    
    //Tier 4
    {name:'Hyperlethal',validItems:['Weapons'],cost:15000,abilities:[],traits:[],tier:4},
    {name:'Mecurial',validItems:['Armor Sets','Accessories'],cost:12500,abilities:[],traits:[],tier:4},
];