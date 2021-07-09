import { Component, OnInit } from '@angular/core';
import { Characteristic } from '../adventurer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent implements OnInit {
  characteristics: Characteristic[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCharacteristics();
  }
  getCharacteristics(): void {
    this.dataService.getCharacteristics().subscribe(characteristics => this.characteristics = characteristics);
  }
}
