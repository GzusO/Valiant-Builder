import { Component, EventEmitter, OnInit } from '@angular/core';
import { Characteristic } from "../Characteristic";
import { Lineage } from "../lineage/Lineage";
import { Profession } from "../profession/Profession";
import { Feature } from "../feature/Feature";
import { DataService } from '../data.service';
import { MatSelectionListChange } from '@angular/material/list';
import { CharacteristicScore, Valiant } from 'data/valiant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
    characteristics: Characteristic[] =[];
    characteristicPoints: number = 2;
    valiantCharacteristics: CharacteristicScore[] =[];
    valiantLineages: Lineage[] = [];
    valiantLineagePersistentFeatures: Feature[] = [];
    valiantLineagePrimaryFeatures: Feature[] = [];
    valiantLineageSecondaryFeatures: Feature[] = [];
    valiantProfession: Profession[] =[];
    valiantClassPrimaryFeatures: Feature[] =[];
    valiantClassSecondaryFeatures: Feature[] = [];
    valiantCharacteristicFeautres: Feature[] =[];
    valiantName: string= "";
    

    lineages: Lineage[] = [];
    lineageFeatures: Feature[] =[];
    professions: Profession[] = [];
    classFeatures: Feature[] = [];

  constructor(private dataService: DataService,private snackBar: MatSnackBar) {
      this.getCharacteristics();
      this.getLineages();
      this.getLineageFeatures();
      this.getProfessions();
      this.getClassFeatures();
      this.characteristics.forEach(char =>this.valiantCharacteristics.push({name:char.name,score:1}));
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
    const result =feats.filter(x=> x.types.includes("Combat"));
    return result;
  }
  secondary(feats: Feature[]): Feature[] {
    const result = feats.filter(x=> x.types.includes("Utility"));
    return result;
  }
  consumePoint(name: string, amount: number){
    const index = this.valiantCharacteristics.findIndex(x=> x.name=== name);
    if(index === -1)
    {
      return;
    }
    //Add point
    if(amount > 0)
    {
      if (this.characteristicPoints >= amount)
      {
        this.characteristicPoints -= amount;
        this.valiantCharacteristics[index].score+= amount;
      }
    }
    //subtract point
    else if(amount < 0)
    {
      if(this.valiantCharacteristics[index].score === 1)
      {
        return;
      }
      this.characteristicPoints -= amount;
      this.valiantCharacteristics[index].score+= amount;
    }
    this.updateCharacteristicFeatures(name,this.valiantCharacteristics[index].score) ;
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
    this.valiantLineagePersistentFeatures = [];
    $event.options[0].selectionList._value?.forEach(x=> this.valiantLineagePersistentFeatures.push(...(x as Object as Lineage).features.filter(y=> y.types.includes("Persistent"))));
  }
  save(): void {
    const valiant = new Valiant();
    valiant.name = this.valiantName;
    valiant.professions = this.valiantProfession;
    valiant.lineages = this.valiantLineages;
    valiant.characteristics = this.valiantCharacteristics;
    valiant.features.push(...this.valiantCharacteristicFeautres);
    valiant.features.push(...this.valiantLineagePersistentFeatures);
    valiant.features.push(...this.valiantLineagePrimaryFeatures);
    valiant.features.push(...this.valiantLineageSecondaryFeatures);
    valiant.features.push(...this.valiantClassPrimaryFeatures);
    valiant.features.push(...this.valiantClassSecondaryFeatures);
    valiant.features.push(...this.valiantProfession[0].features);
    
    this.dataService.addValiant(valiant);

    this.snackBar.open("Valiant Saved",undefined,{duration:3000});
  }
}


