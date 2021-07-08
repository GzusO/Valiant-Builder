import { Injectable } from '@angular/core';
import { Adventurer } from './adventurer';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {
  private adventurersUrl = 'api/adventurers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAdventurers(): Observable<Adventurer[]>{
    return this.http.get<Adventurer[]>(this.adventurersUrl)
      .pipe(
        tap(_ => this.log('fetched adventurers')),
        catchError(this.handleError<Adventurer[]>('getAdventurers',[]))
      );
  }

  getAdventurer(id: Number): Observable<Adventurer> {
    const url = `${this.adventurersUrl}/${id}`;
    return this.http.get<Adventurer>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Adventurer>(`getAdventurer id=${id}`))
    )
  }

  updateAdventurer(adventurer: Adventurer): Observable<any> {
    return this.http.put(this.adventurersUrl,adventurer,this.httpOptions).pipe(
      tap(_ => this.log(`updated adventurer id=${adventurer.id}`)),
      catchError(this.handleError<any>('updateAdventurer'))
    );
  }

  addAdventurer(adventurer: Adventurer): Observable<Adventurer> {
    return this.http.post<Adventurer>(this.adventurersUrl, adventurer, this.httpOptions).pipe(
      tap((newAdventurer: Adventurer) => this.log(`added adventurer with id=${newAdventurer.id}`)),
      catchError(this.handleError<Adventurer>('addAdventurer'))
    );
  }

  deleteAdventurer(id: Number): Observable<Adventurer> {
    const url = `${this.adventurersUrl}/${id}`;

    return this.http.delete<Adventurer>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted adventurer id=${id}`)),
      catchError(this.handleError<Adventurer>('deleteAdventurer'))
    );
  }

  searchAdventurers(term: string): Observable<Adventurer[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Adventurer[]>(`${this.adventurersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found adventurers matching "${term}"`) :
        this.log(`no adventurers matching "${term}"`)),
      catchError(this.handleError<Adventurer[]>('searchAdventurers'))
    );
  }

  constructor(
    private messageService:MessageService,
    private http: HttpClient
    ) { }

  private log(message: string) {
    this.messageService.add(`AdventurerService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
