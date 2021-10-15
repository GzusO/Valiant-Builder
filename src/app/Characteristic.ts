import { Ability } from "./Ability";


export interface Characteristic {
    name: string;
    description: string;
    abilities: Ability[];
}
