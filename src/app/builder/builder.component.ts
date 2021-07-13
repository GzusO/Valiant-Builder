import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Characteristic, Feature, Lineage } from '../adventurer';
import { DataService } from '../data.service';
import { Pipe, PipeTransform } from '@angular/core';



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
    lineages: Lineage[] = [];
    lineageFeatures: Feature[] =[];

  constructor(private dataService: DataService) {
      this.getCharacteristics();
      this.getLineages();
      this.getLineageFeatures();
      this.characteristics.forEach(char =>this.valiantCharacteristics.set(char.name,1));
   }

  ngOnInit(): void {}

  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
  }
  getLineages(): void {
    this.dataService.getLineages().subscribe(lineages => this.lineages = lineages);
  }
  getLineageFeatures():void {
    this.dataService.getLineageFeatures().subscribe(feats => this.lineageFeatures=feats);
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
        this.valiantCharacteristics.set(name,this.valiantCharacteristics.get(name)! + amount)
      }
    }
    else if(amount < 0)
    {
      if(this.valiantCharacteristics.get(name)! === 1)
      {
        return;
      }
      this.characteristicPoints -= amount;
      this.valiantCharacteristics.set(name,this.valiantCharacteristics.get(name)! + amount)
    } 
  }
}


