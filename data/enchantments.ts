import { Ability } from "src/app/Ability";
import { Trait } from "src/app/Trait";

export interface Enchantment {
    name: string;
    validItems: string[];
    cost: number;
    traits: Trait[];
    abilities: Ability[];
}