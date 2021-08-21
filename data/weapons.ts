import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Weapon{
    name: string;
    tags: string[];
    weight: number; //lb.
    cost: number; //tier 0 cost in tins
    abilities: Ability[];
    traits: Trait[];
    tier: number;
}

export const weaponData: Weapon[] =[
    {name:'Short Blade',tags:['Size-Small','Melee'],weight:2,cost:100,abilities:[],traits:[],tier:0},
    {name:'Long Blade',tags:['Size-Medium','Melee'],weight:3,cost:250,abilities:[],traits:[],tier:0},
    {name:'Heavy Blade',tags:['Size-Large','Melee','Two-Handed'],weight:4,cost:300,abilities:[],traits:[],tier:0},
    {name:'Great Blade',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:10,cost:500,abilities:[],traits:[],tier:0},
    
    {name:'Club',tags:['Size-Medium','Melee'],weight:3,cost:50,abilities:[],traits:[],tier:0},
    {name:'Heavy Club',tags:['Size-Medium','Melee','Two-Handed'],weight:5,cost:150,abilities:[],traits:[],tier:0},
    {name:'Great Club',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:25,cost:300,abilities:[],traits:[],tier:0},
    
    {name:'Axe',tags:['Size-Medium','Melee'],weight:6,cost:75,abilities:[],traits:[],tier:0},
    {name:'Heavy Axe',tags:['Size-Large','Melee','Two-Handed'],weight:3,cost:200,abilities:[],traits:[],tier:0},
    {name:'Great Axe',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:15,cost:400,abilities:[],traits:[],tier:0},
    
    {name:'Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:4,cost:75,abilities:[],traits:[],tier:0},
    {name:'Bladed Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:4,cost:100,abilities:[],traits:[],tier:0},
    {name:'Hybrid Polearm',tags:['Size-Medium','Melee','Reach 1'],weight:5,cost:100,abilities:[],traits:[],tier:0},
    {name:'Heavy Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:7,cost:200,abilities:[],traits:[],tier:0},
    {name:'Heavy Bladed Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:7,cost:250,abilities:[],traits:[],tier:0},
    {name:'Heavy Hybrid Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:9,cost:500,abilities:[],traits:[],tier:0},
    
    {name:'Bow',tags:['Size-Medium','Projectile 8','Two-Handed'],weight:3,cost:100,abilities:[],traits:[],tier:0},
    {name:'Crossbow',tags:['Size-Medium','Projectile 8','Two-Handed'],weight:8,cost:100,abilities:[],traits:[],tier:0},
    {name:'Short Gun',tags:['Size-Small','Projectile 8','Two-Handed'],weight:3,cost:150,abilities:[],traits:[],tier:0},
    {name:'Arcane Short Gun',tags:['Size-Small','Arcane','Projectile 6','Reach 3','Two-Handed'],weight:5,cost:250,abilities:[],traits:[],tier:0},
    {name:'Heavy Bow',tags:['Size-Large','Projectile 6','Two-Handed','Unwieldly'],weight:6,cost:200,abilities:[],traits:[],tier:0},
    {name:'Heavy Crossbow',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:12,cost:250,abilities:[],traits:[],tier:0},
    {name:'Carbine',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:5,cost:400,abilities:[],traits:[],tier:0},
    {name:'Arcane Carbine',tags:['Size-Medium','Arcane','Projectile 3','Reach 5','Two-Handed','Unwieldly'],weight:10,cost:500,abilities:[],traits:[],tier:0},
    {name:'Great Bow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:12,cost:400,abilities:[],traits:[],tier:0},
    {name:'Great Crossbow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:18,cost:500,abilities:[],traits:[],tier:0},
    {name:'Rifle',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:7,cost:600,abilities:[],traits:[],tier:0},
    {name:'Arcane Rifle',tags:['Size-Large','Arcane','Projectile 2','Reach 10','Two-Handed','Unwieldly','Heavy'],weight:15,cost:750,abilities:[],traits:[],tier:0},
    
    {name:'Small Shield',tags:['Size-Small','Melee','Shield'],weight:5,cost:75,abilities:[],traits:[],tier:0},
    {name:'Medium Shield',tags:['Size-Medium','Melee','Shield'],weight:6,cost:75,abilities:[],traits:[],tier:0},
    {name:'Large Shield',tags:['Size-Large','Melee','Shield','Heavy'],weight:20,cost:500,abilities:[],traits:[],tier:0},
    
];