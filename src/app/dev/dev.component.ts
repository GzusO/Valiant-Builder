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
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  features: Feature[] = [];
  traits: Trait[] = [];
  abilities: Ability[] = [];
  importText: string= ""
  importAbility: Ability = this.EmptyAbility();
  constructor() { }

  ngOnInit(): void {
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
    return `{name:'${this.escapeQuote(abl.name)}',types:[],primaryTags:[${this.formatStringArray(abl.primaryTags)}],secondaryTags:[${this.formatStringArray(abl.secondaryTags)}],tertiaryTags:[${this.formatStringArray(abl.tertiaryTags)}],description:'${this.escapeQuote(abl.description)}',tier:${abl.tier},attack:${abl.attack},energyDamage:${abl.energyDamage},scaling:'${this.escapeQuote(abl.scaling)}'},`;
  }
  FeatToTS(abl: Feature): string {
    return abl.name;
  }
  TrtToTS(abl: Trait): string {
    return abl.name;
  }
  EmptyAbility(): Ability {
    return {name:'',types:[],primaryTags:[],secondaryTags:[],tertiaryTags:[],description:'',tier:-1,attack:0,energyDamage:0,scaling:''};
    
  }
  formatTag(tag:string):string {
    if(tag.includes("Energy")){
      return "Energy "+tag.split(" ")[0].trim();
    }
    else{
      return tag.trim();
    }
  }
  ParseImport($event:any): void {
    let data = this.importText;
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

  addAbility():void {
    this.abilities.push(this.importAbility);
    this.importAbility = this.EmptyAbility();
    this.importText = "";
  }

  addSTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
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

    // Add our fruit
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

    // Add our fruit
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
