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
 
  constructor(private adventurerService: AdventurerService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAdventurers();
  }

  getAdventurers(): void {
    this.adventurerService.getAdventurers()
      .subscribe(adventurers => this.adventurers=adventurers);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.adventurerService.addAdventurer({ name } as Adventurer)
      .subscribe((adventurer: Adventurer) => {
        this.adventurers.push(adventurer)
      }); 
  }

  delete(adventurer: Adventurer): void {
    this.adventurers = this.adventurers.filter(a => a !== adventurer);
    this.adventurerService.deleteAdventurer(adventurer.id).subscribe();
  }
}
