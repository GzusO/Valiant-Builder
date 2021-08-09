import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ability-select-dialog',
  templateUrl: './ability-select-dialog.component.html',
})
export class AbilitySelectDialogComponent implements OnInit {
  selection: Ability[] =[];
  abilities: Ability[] = [];
  displayAbilities: Ability[] = [];
  filter: string = "";

  constructor(public dialogRef: MatDialogRef<AbilitySelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ability[], private dataService: DataService) { }

  ngOnInit(): void {
    this.getAbilities();
    this.displayAbilities = this.abilities;
  }

  getAbilities(): void {
    this.dataService.getAbilities().subscribe(abil => (this.abilities= abil));
  }
  onCancelClick(): void{
    this.dialogRef.close();
  }
  filterItem(event: string):void{
    if(!event)
      this.displayAbilities = this.abilities;
    this.displayAbilities = this.abilities.filter(x => x.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()));
  }
}
