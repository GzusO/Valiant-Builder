import { Ability } from "src/app/Ability";

export interface Enchantment {
    name: string;
    cost: number;
    abilities: Ability[];
    tier: number;
    types: string[];
}
// Tier Cost
// 00   250
// 01   1,000
// 02   3,000
// 03   6,000
// 04   10,000
// 05   15,000
// 06   21,000
// 07   28,000
// 08   36,000
// 09   45,000
// 10   55,000
export const enchantmentData: Enchantment[] = [
    //Weapon
    {name:'Light-Casting',cost:250,abilities:[],tier:0,types:['Weapon']},
    {name:'Weighted',cost:250,abilities:[],tier:0,types:['Weapon']},

    {name:'Arcane Shimmers',cost:1000,abilities:[],tier:1,types:['Weapon']},
    {name:'Blinking',cost:1000,abilities:[],tier:1,types:['Weapon']},

    {name:'Glasscharm',cost:3000,abilities:[],tier:2,types:['Weapon']},
    {name:'Arc-Wreathed',cost:3000,abilities:[],tier:2,types:['Weapon']},

    {name:'Flurrycharm',cost:15000,abilities:[],tier:5,types:['Weapon']},

    {name:'Hyperlethal',cost:21000,abilities:[],tier:6,types:['Weapon']},
    //Armor
    {name:'Hardened',cost:250,abilities:[],tier:0,types:['Armor']},
    {name:'Animated',cost:250,abilities:[],tier:0,types:['Armor']},

    {name:'Thorned',cost:1000,abilities:[],tier:1,types:['Armor']},
    {name:'Fire-Resistant',cost:1000,abilities:[],tier:1,types:['Armor']},

    {name:'Arc-Powered',cost:3000,abilities:[],tier:2,types:['Armor']},
    {name:'Breakway Plating',cost:3000,abilities:[],tier:2,types:['Armor']},

    {name:'Extra Pockets',cost:6000,abilities:[],tier:3,types:['Armor']},
    {name:'Reactive',cost:6000,abilities:[],tier:3,types:['Armor']},

    {name:'Mercurial',cost:45000,abilities:[],tier:9,types:['Armor']},
    //Utility
    {name:'Clean',cost:250,abilities:[],tier:0,types:['Utility']},
    {name:'Light',cost:250,abilities:[],tier:0,types:['Utility']},

    {name:'Regenerative',cost:1000,abilities:[],tier:1,types:['Utility']},
    {name:'Illusory',cost:1000,abilities:[],tier:1,types:['Utility']},

    {name:'Internal Compass',cost:3000,abilities:[],tier:2,types:['Utility']},
    {name:'Arcane Indicator',cost:3000,abilities:[],tier:2,types:['Utility']},

    {name:'Imprinted',cost:6000,abilities:[],tier:3,types:['Utility']},
    {name:'Returning',cost:6000,abilities:[],tier:3,types:['Utility']},

];