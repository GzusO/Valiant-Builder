import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Gear{
    name: string;
    tags: string[];
    weight: number; //lb.
    cost: number; //tier 0 cost in tins
    abilities: Ability[];
    traits: Trait[];
    tier: number;
}

export const gearData: Gear[] = [
    //Tier 0
    {name:'Crowbar',tags:['Size-Medium','Wielded 1'],weight:3,cost:10,abilities:[],traits:[],tier:0},
    {name:'Lantern',tags:['Size-Small','Wielded 1','Worn'],weight:2,cost:250,abilities:[],traits:[],tier:0},
    {name:'Trauma Kit',tags:['Size-Small','Wielded 2','Consumable 1'],weight:5,cost:500,abilities:[],traits:[],tier:0},
    {name:'Pavise Shield',tags:['Size-Large','Wielded 2,','Consumable 1'],weight:10,cost:500,abilities:[],traits:[],tier:0},
    
    //Tier 1
    {name:'Caffeinated Brew',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:1500,abilities:[],traits:[],tier:1},
    {name:'Caltrops',tags:['Size-Small','Wielded 1','Consumable 3'],weight:2,cost:1000,abilities:[],traits:[],tier:1},
    {name:'Flare',tags:['Size-Small','Wielded 1','Consumable 3'],weight:2,cost:1250,abilities:[],traits:[],tier:1},
    {name:'Smokescreen',tags:['Size-Small','Wielded 1','Consumable 1'],weight:2,cost:1000,abilities:[],traits:[],tier:1},
    
    //Tier 2
    {name:'Parachute',tags:['Size-Medium','Worn','Consumable 1'],weight:30,cost:3000,abilities:[],traits:[],tier:2},
    {name:'Stun Bomb',tags:['Size-Small','Wielded 1','Consumable 1'],weight:1,cost:4000,abilities:[],traits:[],tier:2},
    {name:'Witch-Hunter Charm',tags:['Size-Small','Arcane','Wielded 1'],weight:1,cost:3500,abilities:[],traits:[],tier:2},

    //Tier 3
    {name:'Arcane Flare',tags:['Size-Small','Arcane','Wielded 1','Consumable 2'],weight:2,cost:6500,abilities:[],traits:[],tier:3},
    {name:'Draining Toxin',tags:['Size-Small','Wielded 2','Consumable 1'],weight:1,cost:7000,abilities:[],traits:[],tier:3},
    {name:'Lethal Toxin',tags:['Size-Small','Wielded 2','Consumable 1'],weight:1,cost:7000,abilities:[],traits:[],tier:3},
    
    //Tier 4
    {name:'Arcane Communicator',tags:['Size-Small','Arcane','Wielded 1'],weight:2,cost:10000,abilities:[],traits:[],tier:4},
    
];