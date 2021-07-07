import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lineage,Ability,Feature,Trait } from '../adventurer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lineage-list',
  templateUrl: './lineage-list.component.html',
  styleUrls: ['./lineage-list.component.scss']
})
export class LineageListComponent implements OnInit {
  lineages: Lineage[] = [];
  selected = new FormControl(0)
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getLineages();
  }

  getLineages(): void {
    this.dataService.getLineages().subscribe(lineages => this.lineages = lineages)
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
