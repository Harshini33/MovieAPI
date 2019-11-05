import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs'; 
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {LoadNewsSuccess, LoadNewsError, LoadNews} from './news.actions';
import {NewsActionsTypes} from './news.actions';

@Injectable()
export class AppEffects {



  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect() loadNews = this.actions$.pipe(
    ofType(NewsActionsTypes.Load),
    switchMap(action => {
      return this.http.get('http://www.omdbapi.com/?s=shining&apikey=a9ef645f').pipe(
        map((response: any) => new LoadNewsSuccess({title: response.Search[0].Title, image:response.Search[0].Poster, Type:response.Search[0].Type, year:response.Search[0].Year, imdbId:response.Search[0].imdbID})),
        catchError(error => of(new LoadNewsError(error)))
      );
    }),
  );

}

