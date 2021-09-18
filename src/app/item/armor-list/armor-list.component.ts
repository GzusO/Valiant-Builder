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
  combatAccessoryDataSource = new MatTableDataSource<Item>();
  utilityAccessoryDataSource = new MatTableDataSource<Item>();
  armorDisplayedColumns: string[] = ['name','weight','cost','traits'];
  accessoryDisplayedColumns: string[] = ['tier','name','weight','cost','traits'];
  @ViewChild('armorSort') sortArmor: MatSort =new MatSort();
  @ViewChild('utilityAccessorySort') sortUtilityAccessory: MatSort =new MatSort();
  @ViewChild('combatAccessoryCombatSort') sortCombatAccessory: MatSort =new MatSort();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArmors();
  }
  ngAfterViewInit() {
    this.armorsDataSource.sort = this.sortArmor;
    this.combatAccessoryDataSource.sort = this.sortCombatAccessory;
    this.utilityAccessoryDataSource.sort = this.sortUtilityAccessory

    this.armorsDataSource.data = this.armors.filter(x=>x.types.includes('Armor'));
    this.combatAccessoryDataSource.data = this.armors.filter(x=> x.types.includes('Combat Accessory'));
    this.utilityAccessoryDataSource.data = this.armors.filter(x=> x.types.includes('Utility Accessory'))

  }

  getArmors():void{
    this.dataService.getArmors().subscribe(armor => this.armors = armor);
  }
}
