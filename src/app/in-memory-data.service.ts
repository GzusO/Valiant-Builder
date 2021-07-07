import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Adventurer } from './adventurer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const adventurers = [
      { id: 11, 
        name: 'Nakoa',
        tier: 1,
        tags: ['pc', 'test'],
        lineage: 'Human',
        physicalPower: 1,
        physicalAcuity: 1,
        physicalResilience: 1,
        mentalPower: 1,
        mentalAcuity: 1,
        mentalResilience: 1,
        enduranceCurrent: 1,
        enduranceMax: 1,
        deathResistCurrent: 1,
        deathResistMax: 1,
        energyCurrent: 1,
        energyMax: 2,
        focusSlotsCurrent: 1,
        focusSlotsMax: 1,
        movement: 1,
        combatSpeed: 1,
        lethality: 1,
        force: 1,
        resistance: 1,
        defence: 1, 
      },
    ];
    return {adventurers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(adventurers: Adventurer[]): number {
    return adventurers.length > 0 ? Math.max(...adventurers.map(adventurer => adventurer.id)) + 1 : 11;
  }
}