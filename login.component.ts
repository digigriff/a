import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../@core/store/store.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  store$: Observable<any>;
  constructor(private _store: Store<{ store: any }>) { 
	  this.store$ = this._store.select('store');
  }

  ngOnInit(): void {
	  this._store.dispatch(login({username:'a', password:'b'}));
  }

}
