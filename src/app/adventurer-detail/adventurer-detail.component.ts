import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdventurerService } from '../adventurer.service';
import { Adventurer } from '../adventurer';

@Component({
  selector: 'app-adventurer-detail',
  templateUrl: './adventurer-detail.component.html',
  styleUrls: ['./adventurer-detail.component.css']
})
export class AdventurerDetailComponent implements OnInit {
  adventurer?: Adventurer 
  constructor(
    private route: ActivatedRoute,
    private adventurerService: AdventurerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAdventurer();
  }
  getAdventurer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.adventurerService.getAdventurer(id)
      .subscribe(adventurer => this.adventurer = adventurer);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.adventurer) {
      this.adventurerService.updateAdventurer(this.adventurer)
        .subscribe(() => this.goBack());
    }
  }
}
