import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lineage } from "src/app/lineage/Lineage";
import { Feature } from "src/app/feature/Feature";
import { DataService } from 'src/app/data.service';

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

  persistent(data: Feature[]): Feature[]{
    return data.filter(x => x.types.includes('Persistent'))
  }
  primary(data: Feature[]): Feature[]{
    return data.filter(x=> x.types.includes('Combat'))
  }
  secondary(data: Feature[]): Feature[]{
    return data.filter(x=> x.types.includes('Utility'))
  }
}
