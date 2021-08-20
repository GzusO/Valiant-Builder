import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Characteristic } from 'src/app/Characteristic';
import { DataService } from 'src/app/data.service';
import { Feature } from 'src/app/feature/Feature';
import { Lineage } from 'src/app/lineage/Lineage';
import { Profession } from 'src/app/profession/Profession';

@Component({
  selector: 'app-valiant-randomizer',
  templateUrl: './valiant-randomizer.component.html',
  styleUrls: ['./valiant-randomizer.component.scss']
})
export class ValiantRandomizerComponent implements OnInit {
  characteristics: Characteristic[] =[];
  lineages: Lineage[] =[];
  features: Feature[] =[];
  professions: Profession[]=[];

  constructor(private dataService: DataService,  private router: Router) { }

  ngOnInit(): void {
    this.dataService.getCharacteristics().subscribe(char => this.characteristics = char);
    this.dataService.getLineages().subscribe(lineage => this.lineages = lineage);
    this.dataService.getFeatures().subscribe(feat => this.features = feat);
    this.dataService.getProfessions().subscribe(prof => this.professions = prof);
  }

  generateClicked(){
    const valiantId = this.generateRandomValiant();

    this.router.navigate(['/valiant/'+valiantId]);
  }

  generateRandomValiant(): number{
    let valiant = new Valiant()
    this.generateCharacteristics(valiant);
    this.generateLineages(valiant);
    this.generateProfession(valiant);
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

    this.characteristics.forEach(char => {
      valiant.features.push(...char.features.filter(feat => feat.tier <= valiant.characteristics.find(vChar => vChar.name ===char.name)!.score));
    });

  }
  generateLineages(valiant: Valiant): void {
    let lineages: number = this.getRandomInt(3,1);//1-2 lineages

    while(lineages> 0)
    {
      valiant.lineages.push(this.lineages.filter(x=> !valiant.lineages.includes(x))[this.getRandomInt(this.lineages.length)])
      lineages--;
    }

    if(valiant.lineages.length === 1)
    {
      const lineageFeats = this.features.filter(x=> x.types.includes(valiant.lineages[0].name));
      let primaryFeats = lineageFeats.filter(x=>x.types.includes("Primary"));
      let secondaryFeats = lineageFeats.filter(x=>x.types.includes("Secondary"));

      valiant.features.push(...lineageFeats.filter(x=> x.types.includes("Persistent")));
      //Select 1st Primary and Secondary Features
      valiant.features.push(primaryFeats[this.getRandomInt(primaryFeats.length)]);
      valiant.features.push(secondaryFeats[this.getRandomInt(secondaryFeats.length)]);
      
      

      //Remove selected Features from list
      primaryFeats = primaryFeats.filter(x=> !valiant.features.includes(x));
      secondaryFeats = secondaryFeats.filter(x=> !valiant.features.includes(x));

      //Select 2nd Primary and Secondary Features
      valiant.features.push(primaryFeats[this.getRandomInt(primaryFeats.length)]);
      valiant.features.push(secondaryFeats[this.getRandomInt(secondaryFeats.length)]);
    }
    else if (valiant.lineages.length === 2)
    {
      for (const lineage of valiant.lineages) {
        const lineageFeats = this.features.filter(x=> x.types.includes(lineage.name));
        const primaryFeats = lineageFeats.filter(x=>x.types.includes("Primary"));
        const secondaryFeats = lineageFeats.filter(x=>x.types.includes("Secondary"));

        valiant.features.push(...lineageFeats.filter(x=> x.types.includes("Persistent")));
        valiant.features.push(primaryFeats[this.getRandomInt(primaryFeats.length)]);
        valiant.features.push(secondaryFeats[this.getRandomInt(secondaryFeats.length)]);
      }
    }
    else
    {
      //WTF
    }
  }

  generateProfession(valiant: Valiant): void {
    valiant.professions.push(this.professions[this.getRandomInt(this.professions.length)]); 
    valiant.features.push(...valiant.professions[0].features);
  }

  generateAspirantFeatures(valiant: Valiant): void {
    const aspirantFeats = this.features.filter(x=> x.types.includes("Aspirant"));
    let primaryFeats = aspirantFeats.filter(x=> x.types.includes("Primary"));
    let secondaryFeats = aspirantFeats.filter(x=> x.types.includes("Secondary"));

    for(let choices = 2; choices > 0; choices--)
    {
      let feat = primaryFeats[this.getRandomInt(primaryFeats.length)];
      valiant.features.push(feat);
      primaryFeats = primaryFeats.filter(x=> x!== feat);
    }
    
    //Add 1 secondary Class Feature
    valiant.features.push(secondaryFeats[this.getRandomInt(secondaryFeats.length)]);
  }

  getRandomInt(max: number, min: number=0): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
