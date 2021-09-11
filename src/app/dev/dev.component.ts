import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Ability } from '../Ability';
import { Feature } from '../feature/Feature';
import { Trait } from '../Trait';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  EmptyFeature(): Feature {
    return {name:'',types:[],description:'', tier:-1,abilities:[],traits:[]};
  }
  EmptyTrait(): Trait {
    return {name:'',types:[],description:'',tier:-1};
  }
  EmptyAbility(): Ability {
    return {name:'',types:[],primaryTags:[],secondaryTags:[],tertiaryTags:[],description:'',tier:-1,attack:0,energyDamage:0,scaling:''};
  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  features: Feature[] = [];
  traits: Trait[] = [];
  abilities: Ability[] = [];

  importAbilityText: string= ""
  importAbility: Ability = this.EmptyAbility();

  importTraitText: string= ""
  importTrait: Trait = this.EmptyTrait();

  importFeatureText: string= ""
  importFeature: Feature = this.EmptyFeature();
  constructor() { }

  ngOnInit(): void {
  }

  copyFeatToTrait():void{
    this.importTrait.types.push(this.importFeature.name);
    this.importTrait.tier = this.importFeature.tier;
  }
  copyFeatToAbility():void{
    this.importAbility.types.push(this.importFeature.name);
    this.importAbility.tier = this.importFeature.tier;
  }

  formatStringArray(strings: string[]): string {

    for(let i = 0;i<strings.length;i++)
    {
      strings[i] = strings[i].replace("'","\\'");
    }

    let result = "'";
    result = result+ strings.join("','");
    result = result+"'";
    if(result.endsWith(",'"))
    {
      result =  result.slice(0,length-2)+"'";
    }
    if(result.endsWith("''")){
      result = '';
    }
    return result;
  }
  escapeQuote(s: string):string{
    return s.replace("'","\\'");
  }
  AblToTS(abl: Ability): string {
    return `{name:'${this.escapeQuote(abl.name)}',types:[${this.formatStringArray(abl.types)}],primaryTags:[${this.formatStringArray(abl.primaryTags)}],secondaryTags:[${this.formatStringArray(abl.secondaryTags)}],tertiaryTags:[${this.formatStringArray(abl.tertiaryTags)}],description:'${this.escapeQuote(abl.description)}',tier:${abl.tier},attack:${abl.attack},energyDamage:${abl.energyDamage},scaling:'${this.escapeQuote(abl.scaling)}'},`;
  }
  FeatToTS(abl: Feature): string {
    return `{name:'${this.escapeQuote(abl.name)}',types:[${this.formatStringArray(abl.types)}],description:'${this.escapeQuote(abl.description)}', tier:${abl.tier},abilities:[],traits:[]},`
  }
  TrtToTS(abl: Trait): string {
    return `{name:'${this.escapeQuote(abl.name)}',types:[${this.formatStringArray(abl.types)}],description:'${this.escapeQuote(abl.description)}',tier:${abl.tier}},`;
  }
  
  formatTag(tag:string):string {
    if(tag.includes("Energy")){
      return "Energy "+tag.split(" ")[0].trim();
    }
    else{
      return tag.trim();
    }
  }
  ParseAbilityImport($event:any): void {
    let data = this.importAbilityText;
    let lines = data.split("\n");

    let name =lines[0].split('(')[0];
    this.importAbility.name = name.trim();

    let line = lines[0].split('(')[1];
    line = line.replace(')','');
    let tags = line.split(',');
    let tagsFormatted: string[] =[];
    tags.map(x=> tagsFormatted.push(this.formatTag(x)));
    this.importAbility.primaryTags= tagsFormatted;

    let sLine =  lines[1];
    this.importAbility.secondaryTags = sLine.split(',');

    let tLine = lines[2];
    this.importAbility.tertiaryTags = tLine.split(',');

    let dLine = lines.slice(3).join(' ');
    this.importAbility.description= dLine.trim();
  }

  ParseTraitImport($event:any): void {
    let data = this.importTraitText;
    let lines = data.split("\n");

    this.importTrait.name = lines[0].trim();

    let dLine = lines.slice(1).join(' ');
    this.importTrait.description= dLine.trim();
  }
  ParseFeatureImport($event:any): void {
    let data = this.importFeatureText;
    let lines = data.split("\n");

    this.importFeature.name = lines[0].trim();

    this.importFeature.types = lines[1].split(" ");

    let dLine = lines.slice(2).join(' ');
    this.importFeature.description= dLine.trim();
  }

  addAbility():void {
    this.abilities.push(this.importAbility);
    this.importAbility = this.EmptyAbility();
    this.importAbilityText = "";
  }
  addTrait():void {
    this.traits.push(this.importTrait);
    this.importTrait = this.EmptyTrait();
    this.importTraitText = "";
  }
  addFeature():void {
    this.features.push(this.importFeature);
    this.importFeature = this.EmptyFeature();
    this.importFeatureText = "";
  }

  addAbilitySource(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importAbility.types.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeAbilitySource(tag: string): void {
    const index = this.importAbility.types.indexOf(tag);

    if (index >= 0) {
      this.importAbility.types.splice(index, 1);
    }
  }

  addTraitSource(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importTrait.types.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeTraitSource(tag: string): void {
    const index = this.importTrait.types.indexOf(tag);

    if (index >= 0) {
      this.importTrait.types.splice(index, 1);
    }
  }

  addFeatType(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importFeature.types.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeFeatType(tag: string): void {
    const index = this.importAbility.types.indexOf(tag);

    if (index >= 0) {
      this.importFeature.types.splice(index, 1);
    }
  }

  addSTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importAbility.secondaryTags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeSTag(tag: string): void {
    const index = this.importAbility.secondaryTags.indexOf(tag);

    if (index >= 0) {
      this.importAbility.secondaryTags.splice(index, 1);
    }
  }

  addTTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importAbility.tertiaryTags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeTTag(tag: string): void {
    const index = this.importAbility.tertiaryTags.indexOf(tag);

    if (index >= 0) {
      this.importAbility.tertiaryTags.splice(index, 1);
    }
  }

  addPTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importAbility.primaryTags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removePTag(tag: string): void {
    const index = this.importAbility.primaryTags.indexOf(tag);

    if (index >= 0) {
      this.importAbility.primaryTags.splice(index, 1);
    }
  }
}
