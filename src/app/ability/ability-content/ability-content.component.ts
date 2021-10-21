import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ability-content',
  templateUrl: './ability-content.component.html',
  styleUrls: ['./ability-content.component.scss']
})
export class AbilityContentComponent implements OnInit {

  @Input() ability?: Ability
  @Input() includeTitle: boolean =true;
  @Input() big: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
