import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Ability } from 'src/app/Ability';
import { AbilitySelectDialogComponent } from 'src/app/ability/ability-select-dialog/ability-select-dialog.component';
import { DataService } from 'src/app/data.service';
import { ValiantExportDialogComponent } from '../valiant-export-dialog/valiant-export-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Item } from 'data/items';
import { ItemEditDialogComponent } from 'src/app/item/item-edit-dialog/item-edit-dialog.component';

@Component({
  selector: 'app-valiant-detail',
  templateUrl: './valiant-detail.component.html',
  styleUrls: ['./valiant-detail.component.scss']
})
export class ValiantDetailComponent implements OnInit {
  valiant?: Valiant;
  abilities: Ability[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog, private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getValiant()
  }

  getValiant(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dataService.getValiant(id).subscribe(valiant => this.valiant = valiant); 
  }

  save():void {
    this.dataService.updateValiant(this.valiant!);
    this.snackBar.open("Valiant Saved",undefined,{duration: 3000})
  }
  export(): void{
    const dialogRef = this.dialog.open(ValiantExportDialogComponent, {data:this.valiant});
  }
  editItem(item: Item): void{
    const dialogRef = this.dialog.open(ItemEditDialogComponent, {panelClass:'fixed-width-dialog',data:item});
  }
  deleteItem(item:Item): void{
    const index = this.valiant!.inventory.indexOf(item);

    if (index >= 0) {
      this.valiant!.inventory.splice(index, 1);
    }
  }
  
  openAddAbilities(): void{
    const dialogRef = this.dialog.open(AbilitySelectDialogComponent);

    dialogRef.afterClosed().subscribe(data => this.addAbilities(data));
  }

  addAbilities(abilities: Ability[]): void {
    this.valiant!.abilities.push(...abilities);
    this.dataService.updateValiant(this.valiant!);
  }
  removeAbility(ability: Ability): void {
    this.valiant!.abilities = this.valiant!.abilities.filter(x=> x!== ability);
    this.dataService.updateValiant(this.valiant!);
  }

  addNewItem(): void {
    this.valiant!.inventory.push({name:'New Item',tags:[],weight:0,cost:0,abilities:[],tier:0,description:'',types:[],quantity:1},)
  }
  dropItem(event: any ) {
    moveItemInArray(this.valiant!.inventory, event.previousIndex, event.currentIndex);
  }
  inventoryWeight(): number{
    if(this.valiant === undefined){
      return 0;
    }
    let weight = 0;
    this.valiant!.inventory.map(x=> weight+= x.quantity*x.weight);
    return weight;
  }
}
