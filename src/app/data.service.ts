import { Injectable } from '@angular/core';
import { Ability, Trait, Feature,Profession, Lineage, Characteristic, Class } from './adventurer';
import { abilityData } from 'data/abilities';
import { featureData } from 'data/features';
import { traitData } from 'data/traits';
import { professionData } from 'data/professions';
import { lineageData } from 'data/lineages';
import { Observable, of } from 'rxjs';
import { characteristicData } from 'data/characteristics';
import { LineageListComponent } from './lineage-list/lineage-list.component';
import { classData } from 'data/classes';

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

    characteristics.map(x => x.features = (features.filter(y => y.types.includes(x.name))).sort((a,b) => a.tier-b.tier));

    return of(characteristics);
  }

  getClasses(): Observable<Class[]>{
    const classes = classData;
    const features= featureData;
    const traits = traitData;
    const abilities = abilityData;

    //Map traits to Features
    features.map(x=>x.traits = (traits.filter(y => y.types.includes(x.name))!));
    //Map abilties to Features
    features.map(x=>x.abilities = (abilities.filter(y => y.types.includes(x.name))!));

    classes.map(x => x.features = (features.filter(y => y.types.includes(x.name))).sort((a,b) => a.tier-b.tier));

    return of (classes);
  }

  getFeaturesByType(type: string): Observable<Feature[]>{
    const features = featureData;
    const traits = traitData;
    const abilities = abilityData;

    const result = features.filter(x=> x.types.includes(type));
    //Map traits to Features
    result.map(x=>x.traits = (traits.filter(y => y.types.includes(x.name))!));
    //Map abilties to Features
    result.map(x=>x.abilities = (abilities.filter(y => y.types.includes(x.name))!));

    return of(result);
  }

  constructor() { }
}
