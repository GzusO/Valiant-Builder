import { Component, EventEmitter, OnInit } from '@angular/core';
import { Characteristic } from "../Characteristic";
import { Lineage } from "../lineage/Lineage";
import { DataService } from '../data.service';
import { MatSelectionListChange } from '@angular/material/list';
import { CharacteristicScore, Valiant } from 'data/valiant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ability } from '../Ability';

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
    valiantLineagePersistentFeatures: Ability[] = [];
    valiantLineagePrimaryFeatures: Ability[] = [];
    valiantLineageSecondaryFeatures: Ability[] = [];
    valiantClassPrimaryFeatures: Ability[] =[];
    valiantClassSecondaryFeatures: Ability[] = [];
    valiantCharacteristicFeautres: Ability[] =[];
    valiantName: string= "";
    valiantGlobalAbilities: Ability[] = [];
    

    lineages: Lineage[] = [];
    lineageFeatures: Ability[] =[];
    classFeatures: Ability[] = [];

  constructor(private dataService: DataService,private snackBar: MatSnackBar) {
      
   }

  ngOnInit(): void {
    this.getCharacteristics();
    this.getLineages();
    this.getLineageAbilities();
    this.getClassAbilities();
    this.getGlobalAbilities();
    this.characteristics.forEach(char =>this.valiantCharacteristics.push({name:char.name,score:1}));
    this.characteristics.forEach(x=> this.updateCharacteristicFeatures(x.name,1));
  }

  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
  }
  getLineages(): void {
    this.dataService.getLineages().subscribe(lineages => this.lineages = lineages);
  }
  getLineageAbilities():void {
    this.dataService.getAbilitiesBySource('Lineage').subscribe(feats => this.lineageFeatures=feats);
  }

  getClassAbilities(): void {
    this.dataService.getAbilitiesBySource('Aspirant').subscribe(feats => this.classFeatures= feats);
  }
  getGlobalAbilities(): void {
    this.dataService.getGlobalAbilities().subscribe(abl => this.valiantGlobalAbilities = abl);
  }

  primary(feats: Ability[]): Ability[] {
    const result =feats.filter(x=> x.source.includes("Combat"));
    return result;
  }
  secondary(feats: Ability[]): Ability[] {
    const result = feats.filter(x=> x.source.includes("Utility"));
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
    this.valiantCharacteristicFeautres = this.valiantCharacteristicFeautres.filter(x => !x.source.includes(name));
    let char: Characteristic | undefined = this.characteristics.find(x=> x.name === name);
    if (char === undefined)
      return;
    let feats: Ability[] = char.abilities.filter(feat => feat.tier <= tier);
    this.valiantCharacteristicFeautres.push(...feats); 
  }
  lineageSelected($event: MatSelectionListChange): void {
    this.valiantLineagePersistentFeatures = [];
    $event.options[0].selectionList._value?.forEach(x=> this.valiantLineagePersistentFeatures.push(...(x as Object as Lineage).abilities.filter(y=> y.source.includes("Persistent"))));
  }
  save(): void {
    const valiant = new Valiant();
    valiant.name = this.valiantName;
    valiant.lineages = this.valiantLineages;
    valiant.characteristics = this.valiantCharacteristics;
    valiant.abilities.push(...this.valiantGlobalAbilities);
    
    this.dataService.addValiant(valiant);

    this.snackBar.open("Valiant Saved",undefined,{duration:3000});
  }
}


