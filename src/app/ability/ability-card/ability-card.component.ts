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
  @Input() enableTracker: Boolean = true;
  @Output() deleteClicked: EventEmitter<Ability> = new EventEmitter<Ability>();
  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(): void {
    this.deleteClicked.emit(this.ability);
  }
  getLimit(ability:Ability): number{
    let limit = ability.secondaryTags.find(x=> x.startsWith("Limited"));
    if (limit === undefined)
      return 0;
    let val = parseInt(limit.split(' ')[1]);
    if(val=== undefined)
      return 0;
    return val;
  }
}
