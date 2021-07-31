import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Weapon{
    name: string;
    class: string;
    tags: string[];
    weight: number; //lb.
    cost: number; //tier 0 cost in tins
    abilities: Ability[];
    traits: Trait[];
    tier: number;
}

export const weaponData: Weapon[] =[
    {name:'Dagger',class:'Short Blade',tags:['Size-Small','Melee','Thrown'],weight:1,cost:200,abilities:[],traits:[],tier:0},
    {name:'Shortsword',class:'Short Blade',tags:['Size-Small','Melee'],weight:2,cost:500,abilities:[],traits:[],tier:0},
    
    {name:'Longsword',class:'Long Blade',tags:['Size-Medium','Melee'],weight:3,cost:750,abilities:[],traits:[],tier:0},
    {name:'Rapier',class:'Long Blade',tags:['Size-Medium','Melee'],weight:2,cost:800,abilities:[],traits:[],tier:0},
    {name:'Claymore',class:'Long Blade',tags:['Size-Large','Melee','Two-Handed'],weight:4,cost:1000,abilities:[],traits:[],tier:0},
    
    {name:'Mace',class:'Club',tags:['Size-Medium','Melee'],weight:3,cost:500,abilities:[],traits:[],tier:0},
    {name:'Battle Hammer',class:'Club',tags:['Size-Medium','Melee'],weight:5,cost:750,abilities:[],traits:[],tier:0},
    {name:'Flail',class:'Club',tags:['Size-Medium','Melee'],weight:4,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Quarterstaff',class:'Club',tags:['Size-Large','Melee','Reach 1'],weight:3,cost:200,abilities:[],traits:[],tier:0},
    
    {name:'Great Mace',class:'Maul',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:25,cost:1500,abilities:[],traits:[],tier:0},
    {name:'Great Hammer',class:'Maul',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:20,cost:1750,abilities:[],traits:[],tier:0},
    
    {name:'Battle Axe',class:'Axe',tags:['Size-Large','Melee'],weight:6,cost:750,abilities:[],traits:[],tier:0},
    {name:'Hatchet',class:'Axe',tags:['Size-Medium','Melee','Thrown'],weight:3,cost:300,abilities:[],traits:[],tier:0},
    {name:'War Pick',class:'Axe',tags:['Size-Medium','Melee'],weight:4,cost:500,abilities:[],traits:[],tier:0},
    
    {name:'Great Sword',class:'Great Blade',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:10,cost:1750,abilities:[],traits:[],tier:0},
    {name:'Great Axe',class:'Great Blade',tags:['Size-Large','Melee','Two-Handed','Heavy'],weight:15,cost:1750,abilities:[],traits:[],tier:0},
    
    {name:'Spear',class:'Polearm',tags:['Size-Medium','Melee','Thrown'],weight:4,cost:300,abilities:[],traits:[],tier:0},
    {name:'Halberd',class:'Polearm',tags:['Size-Large','Melee','Two-Handed'],weight:7,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Pike',class:'Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:6,cost:800,abilities:[],traits:[],tier:0},
    {name:'Glaive',class:'Polearm',tags:['Size-Large','Melee','Two-Handed'],weight:7,cost:1250,abilities:[],traits:[],tier:0},
    {name:'War Scythe',class:'Polearm',tags:['Size-Large','Melee','Two-Handed','Reach 1'],weight:9,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Lance',class:'Polearm',tags:['Size-Large','Melee'],weight:7,cost:1000,abilities:[],traits:[],tier:0},
    
    {name:'Shortbow',class:'Bow',tags:['Size-Medium','Projectile 8','Two-Handed','Unwieldly'],weight:3,cost:250,abilities:[],traits:[],tier:0},
    {name:'Longbow',class:'Bow',tags:['Size-Large','Projectile 6','Two-Handed','Unwieldly'],weight:6,cost:500,abilities:[],traits:[],tier:0},
    {name:'Greatbow',class:'Bow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:12,cost:1000,abilities:[],traits:[],tier:0},
    
    {name:'Light Crossbow',class:'Crossbow',tags:['Size-Medium','Projectile 8','Two-Handed','Unwieldly'],weight:8,cost:500,abilities:[],traits:[],tier:0},
    {name:'Heavy Crossbow',class:'Crossbow',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:12,cost:750,abilities:[],traits:[],tier:0},
    {name:'Arbalest',class:'Crossbow',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:18,cost:1000,abilities:[],traits:[],tier:0},
    
    {name:'Revolver',class:'Firearm',tags:['Size-Small','Projectile 8'],weight:3,cost:1000,abilities:[],traits:[],tier:0},
    {name:'Carbine',class:'Firearm',tags:['Size-Medium','Projectile 6','Two-Handed','Unwieldly'],weight:5,cost:2000,abilities:[],traits:[],tier:0},
    {name:'Rifle',class:'Firearm',tags:['Size-Large','Projectile 3','Two-Handed','Unwieldly','Heavy'],weight:7,cost:3000,abilities:[],traits:[],tier:0},
    {name:'Arclok',class:'Firearm',tags:['Size-Small','Arcane','Projectile 6'],weight:5,cost:2500,abilities:[],traits:[],tier:0},
    {name:'Light Arcine',class:'Firearm',tags:['Size-Medium','Arcane','Projectile 3','Two-Handed','Unwieldly'],weight:10,cost:3000,abilities:[],traits:[],tier:0},
    {name:'Heavy Arcine',class:'Firearm',tags:['Size-Large','Arcane','Projectile 2','Two-Handed','Unwieldly','Heavy'],weight:15,cost:5000,abilities:[],traits:[],tier:0},
    
    {name:'Buckler',class:'Small Shield',tags:['Size-Small','Melee','Shield'],weight:5,cost:250,abilities:[],traits:[],tier:0},
    {name:'Target Shield',class:'Small Shield',tags:['Size-Small','Melee','Shield'],weight:6,cost:250,abilities:[],traits:[],tier:0},
    
    {name:'Kite Shield',class:'Medium Shield',tags:['Size-Medium','Melee','Shield'],weight:10,cost:500,abilities:[],traits:[],tier:0},
    {name:'Round Shield',class:'Medium Shield',tags:['Size-Medium','Melee','Shield'],weight:8,cost:500,abilities:[],traits:[],tier:0},
    
    {name:'Tower Shield',class:'Great Shield',tags:['Size-Large','Melee','Shield','Heavy'],weight:20,cost:750,abilities:[],traits:[],tier:0},
    {name:'Bastion Shield',class:'Great Shield',tags:['Size-Large','Melee','Two-Handed','Shield','Heavy'],weight:40,cost:1500,abilities:[],traits:[],tier:0},
];