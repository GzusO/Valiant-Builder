import { Injectable } from '@angular/core';
import { Ability, Trait, Feature,Profession, Lineage } from './adventurer';
import { abilityData } from 'data/abilities';
import { featureData } from 'data/features';
import { traitData } from 'data/traits';
import { professionData } from 'data/professions';
import { lineageData } from 'data/lineages';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProfessions(): Observable<Profession[]> {
    const professions = professionData;
    const features = featureData;
    const traits = traitData;
    const abilities = abilityData;

    //Map traits to Features
    features.map(x=>x.traits = (traits.filter(y => y.types.every(z=>x.types.includes(z)))!));
    //Map abilties to Features
    features.map(x=>x.abilities = (abilities.filter(y => y.types.every(z=>x.types.includes(z)))!));
    //Map Features to Professions
    professions.map(x =>x.features = (features.filter(y => y.types.includes(x.name))!));

    return of(professions);
  }

  getLineages(): Observable<Lineage[]>{
    const lineages = lineageData;
    const features = featureData;
    const traits = traitData;
    const abilities = abilityData;

    //Map traits to Features
    features.map(x=>x.traits = (traits.filter(y => y.types.includes(x.name))!));
    //Map abilties to Features
    features.map(x=>x.abilities = (abilities.filter(y => y.types.includes(x.name))!));


    lineages.map(x => x.features = (features.filter(y => y.types.includes('Lineage')).filter(y => y.types.includes(x.name)))!);

    return of(lineages);
  }
  constructor() { }
}
