import { Ability } from "src/app/Ability";
import { Feature } from "src/app/feature/Feature";
import { Lineage } from "src/app/lineage/Lineage";
import { Profession } from "src/app/profession/Profession";
import { Trait } from "src/app/Trait";
import { Item } from "./items";

export class Valiant {
    id: number;
    name: string;
    lineages: Lineage[];
    features: Feature[];
    characteristics: CharacteristicScore[];
    abilities: Ability[];
    traits: Trait[];
    tier: number;
    professions: Profession[];


    //Inventory
    inventory: Item[];
    tins: number = 0;
    crowns: number = 0;
    perls: number = 0;
    weightThreshold: number =75;
    inventoryWeight: number =0;

    //Attributes
    enduranceMax: number=2;
    enduranceCurrent: number=2;
    armorMax: number=10;
    armorCurrent: number=10;
    deathResistanceMax: number=2;
    deathResistanceCurrent: number =2;

    focus: number = 1;
    movement: number = 5;
    lethality: number= 0;
    resistance: number = 0;
    
    //Descriptions
    description: string = "";
    age: string = "";
    height: string = "";
    weight: string = "";
    gender: string = "";
    appearance: string = "";
    origin: string = "";
    languages: string = "";
    constructor(){
        this.name = "";
        this.features =[];
        this.lineages = [];
        this.characteristics = [];
        this.abilities = [];
        this.traits = [];
        this.tier = 0;
        this.professions = [];
        this.id = -1;
        this.inventory = [];
    }
}

export interface CharacteristicScore {
    name: string;
    score: number;
}