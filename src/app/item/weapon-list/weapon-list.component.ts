import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Weapon } from 'data/weapons';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit, AfterViewInit {
  weapons: Weapon[] =[];
  weaponsDataSource = new MatTableDataSource<Weapon>();
  displayedColumns: string[] = ['name', 'tags', 'class', 'weight','cost','traits'];

  @ViewChild('weaponSort') sortWeapons: MatSort = new MatSort();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getWeapons();
  }

  ngAfterViewInit():void {
    this.weaponsDataSource.sort = this.sortWeapons;
    this.weaponsDataSource.data = this.weapons;
  }

  getWeapons():void {
    this.dataService.getWeapons().subscribe(weapon => this.weapons=weapon);
  }
}
