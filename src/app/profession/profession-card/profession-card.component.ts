import { Component, Input, OnInit } from '@angular/core';
import { Profession } from "src/app/profession/Profession";

@Component({
  selector: 'app-profession-card',
  templateUrl: './profession-card.component.html',
  styleUrls: ['./profession-card.component.scss']
})
export class ProfessionCardComponent implements OnInit {

  @Input() profession?: Profession
  constructor() { }

  ngOnInit(): void {
  }

}
