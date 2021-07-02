import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Adventurer } from '../adventurer';
import { AdventurerService } from '../adventurer.service';

@Component({
  selector: 'app-adventurer-search',
  templateUrl: './adventurer-search.component.html',
  styleUrls: ['./adventurer-search.component.css']
})
export class AdventurerSearchComponent implements OnInit {
  adventurers$!: Observable<Adventurer[]>;
  private searchTerms = new Subject<string>();

  constructor(private adventurerService: AdventurerService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.adventurers$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore new term if same as previous term
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.adventurerService.searchAdventurers(term)),
    );
  }

}
