import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Characteristic } from 'src/app/Characteristic';
import { DataService } from 'src/app/data.service';

import { Lineage } from 'src/app/lineage/Lineage';

@Component({
  selector: 'app-valiant-randomizer',
  templateUrl: './valiant-randomizer.component.html',
  styleUrls: ['./valiant-randomizer.component.scss']
})
export class ValiantRandomizerComponent implements OnInit {
  characteristics: Characteristic[] =[];
  lineages: Lineage[] =[];

  constructor(private dataService: DataService,  private router: Router) { }

  ngOnInit(): void {
    this.dataService.getCharacteristics().subscribe(char => this.characteristics = char);
    this.dataService.getLineages().subscribe(lineage => this.lineages = lineage);
  }

  generateClicked(){
    const valiantId = this.generateRandomValiant();

    this.router.navigate(['/valiant/'+valiantId]);
  }

  generateRandomValiant(): number{
    let valiant = new Valiant()
    this.generateCharacteristics(valiant);
    this.generateLineages(valiant);
    this.generateAspirantFeatures(valiant);

    valiant.name = ''+this.getRandomInt(100,1);


    this.dataService.addValiant(valiant);
    return valiant.id;
  }

  generateCharacteristics(valiant: Valiant): void {
    let points: number = 2;
    this.characteristics.forEach(char => valiant.characteristics.push({name: char.name, score:1}));//Add all characteristics to valiant. 

    //assign points randomly
    while(points > 0)
    {
      valiant.characteristics[this.getRandomInt(valiant.characteristics.length)].score++;
      points--;
    }

    //TODO: Gather Characteristic Traits/Abilities

  }
  generateLineages(valiant: Valiant): void {

  }


  generateAspirantFeatures(valiant: Valiant): void {

  }

  getRandomInt(max: number, min: number=0): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
