import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Characteristic } from '../adventurer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
    characteristics: Characteristic[] =[];
    characteristicPoints: number = 2;
    valiantCharacteristics: Map<string,number> = new Map<string,number>();
  constructor(fb: FormBuilder, private dataService: DataService) {
      this.getCharacteristics();
      this.characteristics.forEach(char =>
        this.valiantCharacteristics.set(char.name,1)
        );
   }

  ngOnInit(): void {
  }

  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
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
