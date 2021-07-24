import { Component, EventEmitter, OnInit } from '@angular/core';
import { Characteristic } from "../Characteristic";
import { Lineage } from "../lineage/Lineage";
import { Profession } from "../profession/Profession";
import { Feature } from "../feature/Feature";
import { DataService } from '../data.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
    characteristics: Characteristic[] =[];
    characteristicPoints: number = 2;
    valiantCharacteristics: Map<string,number> = new Map<string,number>();
    valiantLineages: string[] = [];
    valiantLineagePersistentFeatures: Feature[] = [];
    valiantLineagePrimaryFeatures: Feature[] = [];
    valiantLineageSecondaryFeatures: Feature[] = [];
    valiantProfession: Profession[] =[];
    valiantClassPrimaryFeatures: Feature[] =[];
    valiantClassSecondaryFeatures: Feature[] = [];
    valiantCharacteristicFeautres: Feature[] =[];
    

    lineages: Lineage[] = [];
    lineageFeatures: Feature[] =[];
    professions: Profession[] = [];
    classFeatures: Feature[] = [];

  constructor(private dataService: DataService) {
      this.getCharacteristics();
      this.getLineages();
      this.getLineageFeatures();
      this.getProfessions();
      this.getClassFeatures();
      this.characteristics.forEach(char =>this.valiantCharacteristics.set(char.name,1));
      this.characteristics.forEach(x=> this.updateCharacteristicFeatures(x.name,1));
   }

  ngOnInit(): void {}

  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
  }
  getLineages(): void {
    this.dataService.getLineages().subscribe(lineages => this.lineages = lineages);
  }
  getLineageFeatures():void {
    this.dataService.getFeaturesByType('Lineage').subscribe(feats => this.lineageFeatures=feats);
  }
  getProfessions(): void{
    this.dataService.getProfessions().subscribe(professions => this.professions=professions);
  }
  getClassFeatures(): void {
    this.dataService.getFeaturesByType('Aspirant').subscribe(feats => this.classFeatures= feats);
  }

  primary(feats: Feature[]): Feature[] {
    const result =feats.filter(x=> x.types.includes("Primary"));
    return result;
  }
  secondary(feats: Feature[]): Feature[] {
    const result = feats.filter(x=> x.types.includes("Secondary"));
    return result;
  }
  consumePoint(name: string, amount: number){
    if(!this.valiantCharacteristics.has(name))
    {
      return;
    }
    if(amount > 0)
    {
      if (this.characteristicPoints >= amount)
      {
        this.characteristicPoints -= amount;
        this.valiantCharacteristics.set(name,this.valiantCharacteristics.get(name)! + amount);
      }
    }
    else if(amount < 0)
    {
      if(this.valiantCharacteristics.get(name)! === 1)
      {
        return;
      }
      this.characteristicPoints -= amount;
      this.valiantCharacteristics.set(name,this.valiantCharacteristics.get(name)! + amount);
    }
    this.updateCharacteristicFeatures(name,this.valiantCharacteristics.get(name)!) ;
  }

  updateCharacteristicFeatures(name: string, tier: number): void {
    //Remove All Features of the Charactertic
    this.valiantCharacteristicFeautres = this.valiantCharacteristicFeautres.filter(x => !x.types.includes(name));
    let char: Characteristic | undefined = this.characteristics.find(x=> x.name === name);
    if (char === undefined)
      return;
    let feats: Feature[] = char.features.filter(feat => feat.tier <= tier);
    this.valiantCharacteristicFeautres.push(...feats);
  }
  lineageSelected($event: MatSelectionListChange): void {
    this.valiantLineagePersistentFeatures = this.lineageFeatures.filter(x=> x.types.includes('Persistent') && x.types.some(y=> $event.source._value?.includes(y)))
  }
}


