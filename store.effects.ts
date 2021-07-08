import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

 
@Injectable()
export class StoreEffects {
 
  loadMovies$ = createEffect(() =>
	this.actions$.pipe(
	  ofType('[Counter Component] Increment'),
	  mergeMap(() => this.http
          .post('http://127.0.0.1:8000/a.php', {}, {
            headers: { 'Content-Type': 'application/json' }
          })
		.pipe(
		  map(movies => ({ type: '[Counter Component] qw', payload: movies })),
		  catchError(error => of({ type: '[Counter Component] err', payload: { error } }))
		)
	  )
	)
  );
 
  constructor(
	private actions$: Actions,
	private http: HttpClient
  ) {}
}
