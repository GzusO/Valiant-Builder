import { Ability } from "../Ability";

export interface Class {
    name: string;
    description: string;
    uniqueFeatureName: string;
    abilities: Ability[];
    archetypes: Archetype[];
}

export interface Archetype {
    name: string;
    description: string;
    class: string;
    abilities: Ability[];
}