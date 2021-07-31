import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';

@Component({
  selector: 'app-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.scss']
})
export class AbilityCardComponent implements OnInit {

  @Input() ability?: Ability;
  constructor() { }

  ngOnInit(): void {
  }

}
