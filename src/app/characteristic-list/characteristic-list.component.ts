import { Component, OnInit } from '@angular/core';
import { Characteristic } from "../Characteristic";
import { DataService } from '../data.service';

@Component({
  selector: 'app-characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent implements OnInit {
  characteristics: Characteristic[] = [];
  displayedColumns: string[] = ['tier','abilityTrait'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCharacteristics();
  }
  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
  }
}
