import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from 'data/items';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.scss']
})
export class GearListComponent implements OnInit, AfterViewInit {
  gear: Item[] =[];
  gearDataSource = new MatTableDataSource<Item>();
  displayedColumns: string[] = ['tier','name', 'tags', 'weight','cost','traits'];
  @ViewChild('gearSort') sortGear: MatSort = new MatSort();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getGear();
  }

  ngAfterViewInit(): void {
    this.gearDataSource.sort = this.sortGear;
    this.gearDataSource.data = this.gear;
  }

  getGear():void {
    this.dataService.getGear().subscribe(gear => this.gear=gear);
  }
}
