import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Archetype } from '../Class';

@Component({
  selector: 'app-archetype-card',
  templateUrl: './archetype-card.component.html',
  styleUrls: ['./archetype-card.component.scss']
})
export class ArchetypeCardComponent implements OnInit {

  @Input() archetype?: Archetype;
  constructor() { }

  ngOnInit(): void {
  }

  utility(data: Ability[]): Ability[]{
    return data.filter(x => x.source.includes('Utility'))
  }
  primary(data: Ability[]): Ability[]{
    return data.filter(x => !x.source.includes('Utility'))
  }
}
