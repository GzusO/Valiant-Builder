import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trait } from 'src/app/Trait';

@Component({
  selector: 'app-trait-card',
  templateUrl: './trait-card.component.html',
  styleUrls: ['./trait-card.component.scss']
})
export class TraitCardComponent implements OnInit {
  @Input() trait?: Trait
  @Input() enableMenu: Boolean = false;
  @Output() deleteClicked: EventEmitter<Trait> = new EventEmitter<Trait>();
  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(): void {
    this.deleteClicked.emit(this.trait);
  }
}
