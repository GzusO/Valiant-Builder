import { Ability } from "src/app/Ability";
import { Feature } from "src/app/feature/Feature";
import { Lineage } from "src/app/lineage/Lineage";
import { Profession } from "src/app/profession/Profession";
import { Trait } from "src/app/Trait";

export class Valiant {
    name: string;
    lineages: Lineage[];
    features: Feature[];
    characteristics: Map<string,number>;
    abilities: Ability[];
    traits: Trait[];
    tier: number;
    professions: Profession[];
    
    constructor(){
        this.name = "";
        this.features =[];
        this.lineages = [];
        this.characteristics = new Map<string,number>();
        this.abilities = [];
        this.traits = [];
        this.tier = 0;
        this.professions = [];
    }
}