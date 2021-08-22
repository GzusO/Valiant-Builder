import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Item } from 'data/items';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit, AfterViewInit{
  armors: Item[] =[];
  armorsDataSource = new MatTableDataSource<Item>();
  accessoryDataSource = new MatTableDataSource<Item>();
  displayedColumns: string[] = ['name', 'tags', 'weight','cost','traits'];

  @ViewChild('armorSort') sortArmor: MatSort =new MatSort();
  @ViewChild('accessorySort') sortAccessory: MatSort =new MatSort();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArmors();
  }
  ngAfterViewInit() {
    this.armorsDataSource.sort = this.sortArmor;
    this.accessoryDataSource.sort = this.sortAccessory;
    this.armorsDataSource.data = this.armors.filter(x=>!x.types.includes('Accessory'));
    this.accessoryDataSource.data = this.armors.filter(x=> x.types.includes('Accessory'));
  }

  getArmors():void{
    this.dataService.getArmors().subscribe(armor => this.armors = armor);
  }
}
