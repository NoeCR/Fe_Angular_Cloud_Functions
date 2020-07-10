import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IGame } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: IGame[] = [];

  constructor(private http: HttpClient) { }

  getNominated() {
    if (!this.games.length)
      return this.http.get<IGame[]>(`${ environment.apiUrl }/api/goty`)
        .pipe(
          tap(
            games => this.games = games
          )
        );

    return of(this.games);
  }

  voteGame(id: string) {
    return this.http.post(
      `${ environment.apiUrl }/api/goty/${id}`
      , {}
    ).pipe(
      catchError( err => {
        console.log('Error en la petición ', err );
        return of({
          ok: false,
          message: err.error.message
        })
      })
    )
  }
}
