import { Component, OnInit } from '@angular/core';
import { Valiant } from 'data/valiant';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-valiant-list',
  templateUrl: './valiant-list.component.html',
  styleUrls: ['./valiant-list.component.scss']
})
export class ValiantListComponent implements OnInit {
  valiants: Valiant[]= [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getValiants();
  }

  getValiants(): void {
    this.dataService.getValiants().subscribe(valiants => this.valiants = valiants);
  }

  delete(valiant: Valiant): void{
    event?.stopPropagation();
    this.dataService.deleteValiant(valiant);
    this.valiants = this.valiants.filter(x=> x.name !== valiant.name);
  }
}
