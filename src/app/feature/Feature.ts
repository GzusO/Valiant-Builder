import { Ability } from "../Ability";
import { Trait } from "../Trait";

export interface Feature {
    name: string;
    types: string[];
    traits: Trait[];
    abilities: Ability[];
    description: string;
    tier: number;
}
