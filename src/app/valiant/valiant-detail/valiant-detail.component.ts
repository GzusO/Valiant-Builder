import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';
import { Feature } from 'src/app/feature/Feature';
import { FeatureSelectDialogComponent } from 'src/app/feature/feature-select-dialog/feature-select-dialog.component';
import { Trait } from 'src/app/Trait';
import { ValiantExportDialogComponent } from '../valiant-export-dialog/valiant-export-dialog.component';

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
    this.valiant = history.state;
    this.getValiantAbilities();
    this.getValiantTraits();
  }

  getValiantAbilities(): void {
    this.valiant!.features.map(x=> this.abilities.push(...x.abilities));
    this.abilities.push(...this.valiant!.abilities);
  }
  getValiantTraits(): void{
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
  
  openAddFeatures(): void{
    const dialogRef = this.dialog.open(FeatureSelectDialogComponent);

    dialogRef.afterClosed().subscribe(data => this.addFeatures(data));
  }

  addFeatures(feats: Feature[]): void {
    this.valiant!.features.push(...feats);
    this.dataService.updateValiant(this.valiant!);
  }
}
