import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ability-list-item',
  templateUrl: './ability-list-item.component.html',
  styleUrls: ['./ability-list-item.component.scss']
})
export class AbilityListItemComponent implements OnInit {

  @Input() ability?: Ability;
  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
