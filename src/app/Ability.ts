
export interface Ability {
    name: string;
    types: string[];
    primaryTags: string[];
    secondaryTags: string[];
    tertiaryTags: string[];
    description: string;
    tier: number;
    attack: number;
    energyDamage: number;
    scaling: string;
}
