import { Ability } from "src/app/Ability";
import { Archetype } from "src/app/class/Class";
import { Lineage } from "src/app/lineage/Lineage";
import { Item } from "./items";

export class Valiant {
    id: number;
    name: string;
    lineages: Lineage[];
    characteristics: CharacteristicScore[];
    abilities: Ability[];
    traits: Ability[];
    tier: number;
    archetypes: Archetype[];

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
    background: string = "";
    constructor(){
        this.name = "";
        this.lineages = [];
        this.characteristics = [];
        this.traits = [];
        this.abilities = [];
        this.tier = 0;
        this.id = -1;
        this.inventory = [];
        this.archetypes = [];
    }
}

export interface CharacteristicScore {
    name: string;
    score: number;
}