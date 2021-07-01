import { Injectable } from '@angular/core';
import { Adventurer } from './adventurer';
import { ADVENTURERS } from './adventurers/mock-adventurers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {
  getAdventurers(): Observable<Adventurer[]>{
    const adventurers = of(ADVENTURERS);
    this.messageService.add('AdventurerService: fecthed adventurers');
    return adventurers;
  }
  constructor(private messageService:MessageService) { }
}
