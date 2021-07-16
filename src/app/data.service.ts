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
  professions = professionData;
  features = featureData; 
  traits = traitData;
  abilities = abilityData;
  lineages = lineageData;
  characteristics = characteristicData;
  classes = classData;

  getProfessions(): Observable<Profession[]> {
    return of(this.professions);
  }

  getLineages(): Observable<Lineage[]>{
    return of(this.lineages);
  }

  getCharacteristics(): Observable<Characteristic[]>{
    return of(this.characteristics);
  }

  getClasses(): Observable<Class[]>{
    return of (this.classes);
  }

  getFeaturesByType(type: string): Observable<Feature[]>{
    return of(this.features.filter(x=> x.types.includes(type)));
  }

  getLineageFeatures(): Observable<Feature[]>{
    return of(this.features.filter(x=> x.types.includes('Lineage')));
  }


  constructor() {
    this.mapAbilities();
    this.mapTraits();
    this.mapCharacteristics();
    this.mapProfessions();
    this.mapClasses();
    this.mapLineages();
  }

  mapAbilities(): void{
    this.features.map(x=>x.abilities = (this.abilities.filter(y => y.types.includes(x.name))!));
  }
  mapTraits(): void{
    this.features.map(x=>x.traits = (this.traits.filter(y => y.types.includes(x.name))!));
  }
  mapCharacteristics(): void{
    this.characteristics.map(x => x.features = (this.features.filter(y => y.types.includes(x.name))).sort((a,b) => a.tier-b.tier));
  }
  mapProfessions(): void{
    this.professions.map(x =>x.features = (this.features.filter(y => y.types.includes(x.name))!));
  }
  mapClasses(): void{
    this.classes.map(x => x.features = (this.features.filter(y => y.types.includes(x.name))).sort((a,b) => a.tier-b.tier));
  }
  mapLineages(): void{
    this.lineages.map(x => x.features = (this.features.filter(y => y.types.includes('Lineage')).filter(y => y.types.includes(x.name)))!);
  }
}
