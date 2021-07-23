import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Enchantment } from 'data/enchantments';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-enchantment-list',
  templateUrl: './enchantment-list.component.html',
  styleUrls: ['./enchantment-list.component.scss']
})
export class EnchantmentListComponent implements OnInit {
  enchantments: Enchantment[] =[];
  enchantmentDataSource = new MatTableDataSource<Enchantment>();
  displayedColumns: string[] = ['tier','name', 'valid', 'cost','traits'];
  @ViewChild('enchantmentSort') sortEnchantments: MatSort = new MatSort();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEnchantments();
  }

  ngAfterViewInit(): void {
    this.enchantmentDataSource.sort = this.sortEnchantments;
    this.enchantmentDataSource.data = this.enchantments;
  }

  getEnchantments():void {
    this.dataService.getEnchantments().subscribe(enchant => this.enchantments=enchant);
  }
}
