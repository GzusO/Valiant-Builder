import { Injectable } from '@angular/core';
import { Class } from "./class/Class";
import { Characteristic } from "./Characteristic";
import { Lineage } from "./lineage/Lineage";
import { Profession } from "./profession/Profession";
import { Ability } from "./Ability";
import { Trait } from "./Trait";
import { Feature } from "./feature/Feature";
import { abilityData } from 'data/abilities';
import { featureData } from 'data/features';
import { traitData } from 'data/traits';
import { professionData } from 'data/professions';
import { lineageData } from 'data/lineages';
import { Observable, of } from 'rxjs';
import { characteristicData } from 'data/characteristics';
import { classData } from 'data/classes';
import { Tag, tagData } from 'data/tags';
import { Armor, armorData } from 'data/armors';
import { ArmorClass, armorClassData } from 'data/armorClasses';
import { Weapon, weaponData } from 'data/weapons';
import { Gear, gearData } from 'data/gear';
import { Enchantment,enchantmentData } from 'data/enchantments';

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
  tags = tagData;
  armors = armorData;
  armorClasses= armorClassData;
  weapons = weaponData;
  gear = gearData;
  enchantments = enchantmentData;

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

  getTagByName(name: string): Tag | undefined {
    return this.tags.find(x => x.name === name);
  }
  getArmors(): Observable<Armor[]> {
    return of(this.armors);
  }
  getArmorClassByName(name:string): ArmorClass | undefined {
    return this.armorClasses.find(x=> x.name===name);
  }
  getWeapons(): Observable<Weapon[]> {
    return of(this.weapons);
  }
  getGear(): Observable<Gear[]>{
    return of(this.gear);
  }
  getEnchantments(): Observable<Enchantment[]>{
    return of(this.enchantments);
  }

  constructor() {
    this.mapAbilities();
    this.mapTraits();
    this.mapCharacteristics();
    this.mapProfessions();
    this.mapClasses();
    this.mapLineages();
    this.mapArmor();
    this.mapWeapons();
    this.mapGear();
    this.mapEnchantments();
  }

  mapAbilities(): void{
    this.features.map(x=>x.abilities = (this.abilities.filter(y => y.types.includes(x.name))!));
    this.classes.map(x=> x.abilities = (this.abilities.filter(y => y.types.includes(x.uniqueFeatureName))));
  }
  mapTraits(): void{
    this.features.map(x=>x.traits = (this.traits.filter(y => y.types.includes(x.name))!));
    this.classes.map(x=>x.traits = (this.traits.filter(y=>y.types.includes(x.uniqueFeatureName))));
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
  mapArmor(): void {
    this.armors.map(x => x.traits = (this.traits.filter(y=> y.types.includes(x.name))));
  }
  mapWeapons(): void {
    this.weapons.map(x =>x.abilities = (this.abilities.filter(y=> y.types.includes(x.name))));
    this.weapons.map(x =>x.traits = (this.traits.filter(y=> y.types.includes(x.name))));
  }
  mapGear(): void {
    this.gear.map(x =>x.abilities = (this.abilities.filter(y=> y.types.includes(x.name))));
    this.gear.map(x =>x.traits = (this.traits.filter(y=> y.types.includes(x.name))));
  }
  mapEnchantments(): void {
    this.enchantments.map(x =>x.abilities = (this.abilities.filter(y=> y.types.includes(x.name))));
    this.enchantments.map(x =>x.traits = (this.traits.filter(y=> y.types.includes(x.name))));
  }
}
