import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Lineage } from "src/app/lineage/Lineage";

@Component({
  selector: 'app-lineage-card',
  templateUrl: './lineage-card.component.html',
  styleUrls: ['./lineage-card.component.scss']
})
export class LineageCardComponent implements OnInit {

  @Input() lineage?: Lineage;
  constructor() { }

  ngOnInit(): void {
  }

  persistent(data: Ability[]): Ability[]{
    return data.filter(x => x.source.includes('Persistent'))
  }
  primary(data: Ability[]): Ability[]{
    return data.filter(x=> x.source.includes('Combat'))
  }
  secondary(data: Ability[]): Ability[]{
    return data.filter(x=> x.source.includes('Utility'))
  }
}
