import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Enchantment } from 'data/enchantments';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-enchantment-list',
  templateUrl: './enchantment-list.component.html',
  styleUrls: ['./enchantment-list.component.scss']
})
export class EnchantmentListComponent implements OnInit, AfterViewInit {
  enchantments: Enchantment[] =[];

  weaponEnchantmentDataSource = new MatTableDataSource<Enchantment>();
  armorEnchantmentDataSource = new MatTableDataSource<Enchantment>();
  utilityEnchantmentDataSource= new MatTableDataSource<Enchantment>();


  displayedColumns: string[] = ['tier','name', 'cost','traits'];

  @ViewChild('weaponEnchantmentSort') sortWeaponEnchantments: MatSort = new MatSort();
  @ViewChild('utilityEnchantmentSort') sortUtilityEnchantments: MatSort = new MatSort();
  @ViewChild('armorEnchantmentSort') sortArmorEnchantments: MatSort = new MatSort();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEnchantments();
  }

  ngAfterViewInit(): void {
    this.weaponEnchantmentDataSource.sort = this.sortWeaponEnchantments;
    this.armorEnchantmentDataSource.sort = this.sortArmorEnchantments;
    this.utilityEnchantmentDataSource.sort =this.sortUtilityEnchantments;

    this.weaponEnchantmentDataSource.data = this.enchantments.filter(x=>x.types.includes("Weapon"));
    this.utilityEnchantmentDataSource.data = this.enchantments.filter(x=> x.types.includes("Utility"));
    this.armorEnchantmentDataSource.data = this.enchantments.filter(x=> x.types.includes("Armor"));
  }

  getEnchantments():void {
    this.dataService.getEnchantments().subscribe(enchant => this.enchantments=enchant);
  }
}
