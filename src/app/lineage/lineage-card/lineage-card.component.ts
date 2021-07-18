import { Component, Input, OnInit } from '@angular/core';
import { Lineage } from "src/app/lineage/Lineage";
import { Feature } from "src/app/feature/Feature";

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

  persistent(data: Feature[]): Feature[]{
    return data.filter(x => x.types.includes('Persistent'))
  }
  primary(data: Feature[]): Feature[]{
    return data.filter(x=> x.types.includes('Primary'))
  }
  secondary(data: Feature[]): Feature[]{
    return data.filter(x=> x.types.includes('Secondary'))
  }
}
