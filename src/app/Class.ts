import { Ability } from "./Ability";
import { Feature } from "./feature/Feature";
import { Trait } from "./Trait";


export interface Class {
    name: string;
    description: string;
    globalAbilityName: string;
    features: Feature[];
    abilities: Ability[];
    traits: Trait[];
}
