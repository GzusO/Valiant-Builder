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
    inventory: Item[];
    tins: number = 0;
    crowns: number = 0;
    perls: number = 0;
    //Attributes
    enduranceMax: number=1;
    enduranceCurrent: number=1;
    energyMax: number=28;
    energyCurrent: number=28;
    deathResistanceMax: number=3;
    deathResistanceCurrent: number =3;
    focusSlotsMax: number = 1;
    focusSlotsCurrent: number =1;
    movement: number = 5;
    combatSpeed: number= 0;
    lethality: number= 0;
    force: number = 0;
    defence: number = 7;
    resistance: number = 0;
    finesse: number = 0;
    
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