import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Valiant } from "data/valiant";

@Component({
    selector: 'app-valiant-export-dialog',
    templateUrl: './valiant-export-dialog.component.html',
  })
  export class ValiantExportDialogComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public valiant: Valiant){}
  
  }