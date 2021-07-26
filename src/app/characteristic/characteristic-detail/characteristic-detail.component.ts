import { Component, Input, OnInit } from '@angular/core';
import { Characteristic } from 'src/app/Characteristic';

@Component({
  selector: 'app-characteristic-detail',
  templateUrl: './characteristic-detail.component.html',
  styleUrls: ['./characteristic-detail.component.scss']
})
export class CharacteristicDetailComponent implements OnInit {

  @Input() characteristic?: Characteristic;
  @Input() displayHeader: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
