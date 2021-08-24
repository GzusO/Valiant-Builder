import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Ability } from 'src/app/Ability';
import { AbilitySelectDialogComponent } from 'src/app/ability/ability-select-dialog/ability-select-dialog.component';
import { DataService } from 'src/app/data.service';
import { Feature } from 'src/app/feature/Feature';
import { FeatureSelectDialogComponent } from 'src/app/feature/feature-select-dialog/feature-select-dialog.component';
import { Trait } from 'src/app/Trait';
import { TraitSelectDialogComponent } from 'src/app/trait/trait-select-dialog/trait-select-dialog.component';
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
  traits: Trait[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog, private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getValiant()
    this.getValiantAbilities();
    this.getValiantTraits();
  }

  getValiant(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dataService.getValiant(id).subscribe(valiant => this.valiant = valiant); 
  }
  getValiantAbilities(): void {
    this.abilities.length =0;
    this.valiant!.features.map(x=> this.abilities.push(...x.abilities));
    this.abilities.push(...this.valiant!.abilities);
  }
  getValiantTraits(): void{
    this.traits.length=0;
    this.valiant!.features.map(x=> this.traits.push(...x.traits));
    this.traits.push(...this.valiant!.traits);
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
  
  openAddFeatures(): void{
    const dialogRef = this.dialog.open(FeatureSelectDialogComponent);

    dialogRef.afterClosed().subscribe(data => this.addFeatures(data));
  }
  openAddAbilities(): void{
    const dialogRef = this.dialog.open(AbilitySelectDialogComponent);

    dialogRef.afterClosed().subscribe(data => this.addAbilities(data));
  }
  openAddTraits(): void{
    const dialogRef = this.dialog.open(TraitSelectDialogComponent);

    dialogRef.afterClosed().subscribe(data => this.addTraits(data));
  }

  addFeatures(feats: Feature[]): void {
    this.valiant!.features.push(...feats);
    this.dataService.updateValiant(this.valiant!);
  }
  removeFeature(feat: Feature): void {
    this.valiant!.features = this.valiant!.features.filter(x=> x!== feat);
    this.dataService.updateValiant(this.valiant!);
  }

  addTraits(traits: Trait[]): void {
    this.valiant!.traits.push(...traits);
    this.dataService.updateValiant(this.valiant!);
    this.getValiantTraits();
  }
  removeTrait(trait: Trait): void {
    this.valiant!.traits = this.valiant!.traits.filter(x=> x!== trait);
    this.dataService.updateValiant(this.valiant!);
    this.getValiantTraits();
  }

  addAbilities(abilities: Ability[]): void {
    this.valiant!.abilities.push(...abilities);
    this.dataService.updateValiant(this.valiant!);
    this.getValiantAbilities();
  }
  removeAbility(ability: Ability): void {
    this.valiant!.abilities = this.valiant!.abilities.filter(x=> x!== ability);
    this.dataService.updateValiant(this.valiant!);
    this.getValiantAbilities();
  }
  addNewItem(): void {
    this.valiant!.inventory.push({name:'New Item',tags:[],weight:0,cost:0,abilities:[],traits:[],tier:0,description:'',types:[],quantity:1},)
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
