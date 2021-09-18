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

  enchantmentDataSource = new MatTableDataSource<Enchantment>();
  utilityEnchantmentDataSource= new MatTableDataSource<Enchantment>();

  displayedColumns: string[] = ['tier','name', 'valid', 'cost','traits'];
  utilityDisplayedColumns: string[] = ['name', 'valid', 'cost','traits'];

  @ViewChild('enchantmentSort') sortEnchantments: MatSort = new MatSort();
  @ViewChild('utilityEnchantmentSort') sortUtilityEnchantments: MatSort = new MatSort();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEnchantments();
  }

  ngAfterViewInit(): void {
    this.enchantmentDataSource.sort = this.sortEnchantments;
    this.utilityEnchantmentDataSource.sort =this.sortUtilityEnchantments;

    this.enchantmentDataSource.data = this.enchantments.filter(x=>x.types.includes("Combat"));
    this.utilityEnchantmentDataSource.data = this.enchantments.filter(x=> x.types.includes("Utility"));
  }

  getEnchantments():void {
    this.dataService.getEnchantments().subscribe(enchant => this.enchantments=enchant);
  }
}
