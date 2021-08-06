import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Feature } from '../Feature';

@Component({
  selector: 'app-feature-select-dialog',
  templateUrl: './feature-select-dialog.component.html',
})
export class FeatureSelectDialogComponent implements OnInit {
  selection: Feature[] =[];
  features: Feature[] = [];
  displayFeatures: Feature[] = [];
  filter: string = "";
  constructor(public dialogRef: MatDialogRef<FeatureSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Feature[], private dataService: DataService) { }

  ngOnInit(): void {
    this.getFeatures();
    this.displayFeatures = this.features;
  }

  getFeatures(): void {
    this.dataService.getFeatures().subscribe(feat => (this.features= feat));
  }
  onCancelClick(): void{
    this.dialogRef.close();
  }
  filterItem(event: string):void{
    if(!event)
      this.displayFeatures = this.features;
    this.displayFeatures = this.features.filter(x => x.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()));
  }
}
