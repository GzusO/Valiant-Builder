import { Feature } from "./feature/Feature";


export interface Characteristic {
    name: string;
    description: string;
    features: Feature[];
}
