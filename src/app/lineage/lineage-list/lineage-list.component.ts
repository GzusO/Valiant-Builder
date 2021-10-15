import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lineage } from "src/app/lineage/Lineage";

import { DataService } from 'src/app/data.service';
import { Ability } from 'src/app/Ability';

@Component({
  selector: 'app-lineage-list',
  templateUrl: './lineage-list.component.html',
  styleUrls: ['./lineage-list.component.scss']
})
export class LineageListComponent implements OnInit {
  lineages: Lineage[] = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getLineages();
  }

  getLineages(): void {
    this.dataService.getLineages().subscribe(lineages => this.lineages = lineages)
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
