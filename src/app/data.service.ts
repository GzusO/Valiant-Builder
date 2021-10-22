import { Injectable } from '@angular/core';
import { Archetype, Class } from "./class/Class";
import { Characteristic } from "./Characteristic";
import { Lineage } from "./lineage/Lineage";
import { Ability } from "./Ability";
import { abilityData } from 'data/abilities';
import { lineageData } from 'data/lineages';
import { Observable, of } from 'rxjs';
import { characteristicData } from 'data/characteristics';
import { archetypeData, classData } from 'data/classes';
import { Tag, tagData } from 'data/tags';
import { Item, armorData,weaponData,gearData } from 'data/items';

import { Enchantment,enchantmentData } from 'data/enchantments';
import { Valiant } from 'data/valiant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  abilities = abilityData;
  lineages = lineageData;
  characteristics = characteristicData;
  classes = classData;
  tags = tagData;
  armors = armorData;
  weapons = weaponData;
  gear = gearData;
  enchantments = enchantmentData;
  archetypes = archetypeData;
  valiants: Valiant[]= [];

  getLineages(): Observable<Lineage[]>{
    return of(this.lineages);
  }

  getCharacteristics(): Observable<Characteristic[]>{
    return of(this.characteristics);
  }

  getClasses(): Observable<Class[]>{
    return of (this.classes);
  }

  getAbilities(): Observable<Ability[]>{
    return of(this.abilities.filter(x => !x.trait));
  }

  getTraits(): Observable<Ability[]>{
    return of(this.abilities.filter(x => x.trait));
  }
 
  getLineageAbilities(): Observable<Ability[]>{
    return of(this.abilities.filter(x=> x.source.includes('Lineage')));
  }

  getAbilitiesBySource(arg0: string): Observable<Ability[]> {
    return of(this.abilities.filter(x=>x.source.includes(arg0)));
  }

  getTagByName(name: string): Tag | undefined {
    return this.tags.find(x => x.name === name);
  }
  getArmors(): Observable<Item[]> {
    return of(this.armors);
  }
  
  getWeapons(): Observable<Item[]> {
    return of(this.weapons);
  }
  getGear(): Observable<Item[]>{
    return of(this.gear);
  }
  getEnchantments(): Observable<Enchantment[]>{
    return of(this.enchantments);
  }

  getValiants(): Observable<Valiant[]>{
    return of(this.valiants);
  }
  getValiant(id: number): Observable<Valiant> {
    return of(this.valiants.find(x=> x.id===id)!);
  }
  getGlobalAbilities(): Observable<Ability[]> {
    return of(this.abilities.filter(x=> x.source.includes("Global")));
  }
  getArchetypesByClassName(name: string): Observable<Archetype[]> {
    return of(this.archetypes.filter(x=>x.class === name));
  }

  constructor() {
    
    this.mapCharacteristics();
    this.mapProfessions();
    this.mapClasses();
    this.mapLineages();
    this.mapArmor();
    this.mapWeapons();
    this.mapGear();
    this.mapEnchantments();
    this.mapArchetypes();
    this.loadValiants();
  }
  mapArchetypes(): void {
    this.archetypes.map(x=>x.abilities = (this.abilities.filter(y=> y.source.includes(x.name))))
  }

  mapCharacteristics(): void{
    this.characteristics.map(x => x.abilities = (this.abilities.filter(y => y.source.includes(x.name))).sort((a,b) => a.tier-b.tier));
  }
  mapProfessions(): void{
    
  }
  mapClasses(): void{
    this.classes.map(x=> x.abilities = (this.abilities.filter(y=> y.source.includes(x.name))))
  }
  mapLineages(): void{
    this.lineages.map(x=> x.abilities =(this.abilities.filter(y=> y.source.includes(x.name))))
  }
  mapArmor(): void {
    
  }
  mapWeapons(): void {
    this.weapons.map(x =>x.abilities = (this.abilities.filter(y=> y.source.includes(x.name))));
  }
  mapGear(): void {
    this.gear.map(x =>x.abilities = (this.abilities.filter(y=> y.source.includes(x.name))));
  }
  mapEnchantments(): void {
    this.enchantments.map(x =>x.abilities = (this.abilities.filter(y=> y.source.includes(x.name))));
  }
  loadValiants(): void {
    const valiants = this.getLocalStorage("valiants");
    this.valiants = valiants !== null ? valiants : [];
  }
  saveValiants(): void {
    this.setLocalStorage("valiants",this.valiants);
  }
  addValiant(valiant: Valiant): void {
    valiant.id = this.genId(this.valiants);
    this.valiants.push(valiant);
    this.saveValiants();
  }
  updateValiant(valiant:Valiant):void{
    const index = this.valiants.findIndex(x=> x.id ===  valiant.id);
    this.valiants[index] = valiant;
    this.saveValiants();
  }
  deleteValiant(valiant: Valiant):void {
    this.valiants = this.valiants.filter(x=> x.id !== valiant.id);
    this.saveValiants();
  }

  getLocalStorage(key: string) {
    try {
      const data: string| null = localStorage.getItem(key);
      return data !== null ? JSON.parse(data) : null;
    }
    catch(e){
      console.error("Error getting data from localStorage",e);
      return null;
    }
  }
  setLocalStorage(key: string, data: any): void {
    try{
      localStorage.setItem(key,JSON.stringify(data));
    }
    catch (e){
      console.error("Error setting data to localStorage",e);
    }
  }
  genId(data: any[]): number {
    return data.length > 0 ? Math.max(...data.map(x => x.id))+1: 11;
  }
}
