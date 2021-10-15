import { Ability } from "../Ability";

export interface Class {
    name: string;
    description: string;
    uniqueFeatureName: string;
    abilities: Ability[];
}
