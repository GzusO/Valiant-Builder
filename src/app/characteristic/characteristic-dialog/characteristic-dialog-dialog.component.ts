import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Characteristic } from "src/app/Characteristic";

@Component({
    selector: 'characteristic-dialog-dialog',
    templateUrl: './characteristic-dialog-dialog.html',
  })
  export class CharacteristicDialogDialog{
    constructor(@Inject(MAT_DIALOG_DATA) public characteristic: Characteristic){}
  
  }