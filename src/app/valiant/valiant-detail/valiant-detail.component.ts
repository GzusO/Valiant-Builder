import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';
import { Trait } from 'src/app/Trait';

@Component({
  selector: 'app-valiant-detail',
  templateUrl: './valiant-detail.component.html',
  styleUrls: ['./valiant-detail.component.scss']
})
export class ValiantDetailComponent implements OnInit {
  valiant?: Valiant;
  abilities: Ability[] = [];
  traits: Trait[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.valiant = history.state;
    this.getValiantAbilities();
    this.getValiantTraits();
  }

  getValiantAbilities(): void {
    this.valiant!.features.map(x=> this.abilities.push(...x.abilities));
    this.abilities.push(...this.valiant!.abilities);
  }
  getValiantTraits(): void{
    this.valiant!.features.map(x=> this.traits.push(...x.traits));
    this.traits.push(...this.valiant!.traits);
  }
  save():void {
    this.dataService.updateValiant(this.valiant!);
  }
}
