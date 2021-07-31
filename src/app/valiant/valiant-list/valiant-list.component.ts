import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Valiant } from 'data/valiant';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-valiant-list',
  templateUrl: './valiant-list.component.html',
  styleUrls: ['./valiant-list.component.scss']
})
export class ValiantListComponent implements OnInit {
  valiants: Valiant[]= [];
  constructor(private dataService:DataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getValiants();
  }

  getValiants(): void {
    this.dataService.getValiants().subscribe(valiants => this.valiants = valiants);
  }

  delete(valiant: Valiant): void{
    event?.stopPropagation();
    this.dataService.deleteValiant(valiant);
    this.valiants = this.valiants.filter(x=> x.id !== valiant.id);
    this.snackBar.open("Valiant Deleted!",undefined, {duration:3000});
  }
}
