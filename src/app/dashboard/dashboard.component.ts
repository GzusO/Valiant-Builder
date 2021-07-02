import { Component, OnInit } from '@angular/core';
import { Adventurer } from '../adventurer';
import { AdventurerService } from '../adventurer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  adventurers: Adventurer[] = [];

  constructor(private adventurerService: AdventurerService) { }

  ngOnInit(): void {
    this.getAdventurers();
  }

  getAdventurers(): void {
    this.adventurerService.getAdventurers()
      .subscribe(adventurers => this.adventurers= adventurers.slice(1,5));
  }
}
