import { Injectable } from '@angular/core';
import { Ability, Trait, Feature,Profession, Lineage, Characteristic } from './adventurer';
import { abilityData } from 'data/abilities';
import { featureData } from 'data/features';
import { traitData } from 'data/traits';
import { professionData } from 'data/professions';
import { lineageData } from 'data/lineages';
import { Observable, of } from 'rxjs';
import { characteristicData } from 'data/characteristics';

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

  getCharacteristics(): Observable<Characteristic[]>{
    const characteristics = characteristicData;
    const features =featureData;
    const traits = traitData;
    const abilities = abilityData;

    //Map traits to Features
    features.map(x=>x.traits = (traits.filter(y => y.types.includes(x.name))!));
    //Map abilties to Features
    features.map(x=>x.abilities = (abilities.filter(y => y.types.includes(x.name))!));

    for (let index = 0; index < characteristics.length; index++) {
      const element = characteristics[index];
      element.scores = new Map<Number,Feature>();
      const validFeatures: Feature[] = features.filter(x=> x.types.includes(element.name)).filter(x=> x.types.some(y => y.startsWith("Tier")))
      for(let index2 = 0; index2 < validFeatures.length;index2++){
        characteristics[index].scores?.set(Number(validFeatures[index2].types.find(x=> x.startsWith("Tier"))?.split(' ')[1]),validFeatures[index2])
      }
    }

    return of(characteristics)
  }

  constructor() { }
}
