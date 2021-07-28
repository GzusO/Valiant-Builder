import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characteristic } from 'src/app/Characteristic';
import { CharacteristicDialogDialog } from './characteristic-dialog-dialog.component';

@Component({
  selector: 'app-characteristic-dialog',
  templateUrl: './characteristic-dialog.component.html',
  styleUrls: ['./characteristic-dialog.component.scss']
})
export class CharacteristicDialogComponent implements OnInit {
  @Input() characteristic?: Characteristic;
  constructor(public dialog: MatDialog) { }

  openDialog(char: Characteristic) {
    const dialogRef = this.dialog.open(CharacteristicDialogDialog, {data:char});
  }
  ngOnInit(): void {
  }

}
