import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ability } from 'src/app/Ability';

@Component({
  selector: 'app-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.scss']
})
export class AbilityCardComponent implements OnInit {

  
  @Input() ability?: Ability;
  @Input() enableMenu: Boolean = false;
  @Output() deleteClicked: EventEmitter<Ability> = new EventEmitter<Ability>();
  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(): void {
    this.deleteClicked.emit(this.ability);
  }
}
