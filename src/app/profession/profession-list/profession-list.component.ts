import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/adventurer';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.scss']
})
export class ProfessionListComponent implements OnInit {
  professions: Profession[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProfessions();
  }
  getProfessions(): void {
    this.dataService.getProfessions().subscribe(professions => this.professions = professions);
  }
}
