import { Component, Input, OnInit } from '@angular/core';
import { Trait } from 'src/app/Trait';

@Component({
  selector: 'app-trait-card',
  templateUrl: './trait-card.component.html',
  styleUrls: ['./trait-card.component.scss']
})
export class TraitCardComponent implements OnInit {
  @Input() trait?: Trait
  constructor() { }

  ngOnInit(): void {
  }

}
