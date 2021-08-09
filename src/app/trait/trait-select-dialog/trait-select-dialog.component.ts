import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Trait } from 'src/app/Trait';

@Component({
  selector: 'app-trait-select-dialog',
  templateUrl: './trait-select-dialog.component.html',
  styleUrls: ['./trait-select-dialog.component.scss']
})
export class TraitSelectDialogComponent implements OnInit {
  selection: Trait[] =[];
  traits: Trait[] = [];
  displayTraits: Trait[] = [];
  filter: string = "";
  
  constructor(public dialogRef: MatDialogRef<TraitSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trait[], private dataService: DataService) { }

  ngOnInit(): void {
    this.getTraits();
    this.displayTraits = this.traits;
  }

  getTraits(): void {
    this.dataService.getTraits().subscribe(trait => (this.traits= trait));
  }
  onCancelClick(): void{
    this.dialogRef.close();
  }
  filterItem(event: string):void{
    if(!event)
      this.displayTraits = this.traits;
    this.displayTraits = this.traits.filter(x => x.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()));
  }
}
