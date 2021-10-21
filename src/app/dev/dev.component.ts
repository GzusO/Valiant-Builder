import { COMMA, ENTER, Z } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Ability } from '../Ability';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  
  EmptyAbility(): Ability {
    let x = {name:'',source:[] as any[],primaryTags:[],secondaryTags:[],description:'',tier:this.defaultAbilityTier ?? -1,trait:this.defaultTrait ?? false,flavorText:''};
    if(this.defaultAbilityTypes !== undefined)
      x.source.push(...this.defaultAbilityTypes)
    return x;
  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;


  abilities: Ability[] = [];

  importAbilityText: string= ""
  importAbility: Ability = this.EmptyAbility();

  defaultAbilityTier?: number;
  defaultAbilityTypes: string[] = [];
  defaultTrait: boolean = true;
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
    return `{name:'${this.escapeQuote(abl.name)}',source:[${this.formatStringArray(abl.source)}],primaryTags:[${this.formatStringArray(abl.primaryTags)}],secondaryTags:[${this.formatStringArray(abl.secondaryTags)}],description:'${this.escapeQuote(abl.description)}',tier:${abl.tier},trait:${abl.trait},flavorText:'${this.escapeQuote(abl.flavorText)}'},`;
  }
 
  ParseAbilityImport($event:any): void {
    let data = this.importAbilityText;
    let lines = data.split("\n");

    let name =lines[0];
    this.importAbility.name = name.trim();

    let pLine =  lines[1];
    this.importAbility.primaryTags= pLine.split(',');

    let sLine =  lines[2];
    this.importAbility.secondaryTags = sLine.split(',');

    if(this.importAbility.secondaryTags[0] === "" && this.importAbility.primaryTags[0] === "")
      this.importAbility.trait = true;
    else
      this.importAbility.trait = false;

    let dLine = lines.slice(3).join(' ');
    this.importAbility.description= dLine.trim();
  }

  addAbility():void {
    this.abilities.push(this.importAbility);
    this.importAbility = this.EmptyAbility();
    this.importAbilityText = "";
  }

  addAbilitySource(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.importAbility.source.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeAbilitySource(tag: string): void {
    const index = this.importAbility.source.indexOf(tag);

    if (index >= 0) {
      this.importAbility.source.splice(index, 1);
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

  addDefaultAbilityType(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.defaultAbilityTypes.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeDefaultAbilityType(tag: string): void {
    const index = this.defaultAbilityTypes.indexOf(tag);

    if (index >= 0) {
      this.defaultAbilityTypes.splice(index, 1);
    }
  }
}
