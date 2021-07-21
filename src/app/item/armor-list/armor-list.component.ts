import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Armor } from 'data/armors';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit, AfterViewInit{
  armors: Armor[] =[];
  armorsDataSource = new MatTableDataSource<Armor>();
  accessoryDataSource = new MatTableDataSource<Armor>();
  displayedColumns: string[] = ['name', 'tags', 'class', 'weight','cost','traits'];

  @ViewChild('armorSort') sortArmor: MatSort =new MatSort();
  @ViewChild('accessorySort') sortAccessory: MatSort =new MatSort();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArmors();
  }
  ngAfterViewInit() {
    this.armorsDataSource.sort = this.sortArmor;
    this.accessoryDataSource.sort = this.sortAccessory;
    this.armorsDataSource.data = this.armors.filter(x=>x.class !== 'Accessory');
    this.accessoryDataSource.data = this.armors.filter(x=> x.class==='Accessory');
  }

  getArmors():void{
    this.dataService.getArmors().subscribe(armor => this.armors = armor);
  }
}
