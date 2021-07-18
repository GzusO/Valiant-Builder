import { Profession } from "./profession/Profession";

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