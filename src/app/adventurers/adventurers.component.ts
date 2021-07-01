import { Component, OnInit } from '@angular/core';
import { Adventurer } from '../adventurer';
import { AdventurerService } from '../adventurer.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-adventurers',
  templateUrl: './adventurers.component.html',
  styleUrls: ['./adventurers.component.css',]
})
export class AdventurersComponent implements OnInit {
  adventurers: Adventurer[] = []
 
  selectedAdventurer?: Adventurer;
  onSelect(adventurer: Adventurer): void {
    this.selectedAdventurer = adventurer;
    this.messageService.add(`AdventurersComponent: Selected adventurer id=${adventurer.id}`);
  }
  constructor(private adventurerService: AdventurerService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAdventurers();
  }

  getAdventurers(): void {
    this.adventurerService.getAdventurers()
      .subscribe(adventurers => this.adventurers=adventurers);
  }
}
