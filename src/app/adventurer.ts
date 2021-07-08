export interface Trait{
    name: string;
    types: string[];
    description: string;
}
export interface Ability{
    name: string;
    types: string[];
    primaryTags: string[];
    secondaryTags: string[];
    tertiaryTags: string[];
    description: string;
}
export interface Feature{
    name: string;
    types: string[];
    traits: Trait[];
    abilities: Ability[];
    description: string;
    tier: number;
}

export interface Profession{
    name: string;
    type: string;
    features: Feature[];
}

export interface Lineage {
    name: string;
    description: string;
    features: Feature[];
}

export interface Characteristic{
    name: string;
    description: string;
    features: Feature[];
}
export interface Adventurer{
    id: number;
    name: string;
    tier: Number;
    tags: string[];
    profession?: Profession;
    lineage: string;
    physicalPower: Number;
    physicalAcuity: Number;
    physicalResilience: Number;
    mentalPower: Number;
    mentalAcuity: Number;
    mentalResilience: Number;
    enduranceCurrent: Number;
    enduranceMax: Number;
    deathResistCurrent: Number;
    deathResistMax: Number;
    energyCurrent: Number;
    energyMax: Number;
    focusSlotsCurrent: Number;
    focusSlotsMax: Number;
    movement: Number;
    combatSpeed: Number;
    lethality: Number;
    force: Number;
    defence: Number;
    resistance: Number;
}