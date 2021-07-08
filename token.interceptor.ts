import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
              private router: Router,
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
	const token = JSON.parse(localStorage.getItem('auth_app_token') || '{}');
	req = req.clone({
		withCredentials: true
	});
    if (Object.keys(token).length !== 0) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token.value),
      });
      return next.handle(req).pipe(tap(
                event=>{
                }, (error: HttpErrorResponse) => {
                    if((error.status == 410)){
						if(localStorage.getItem('auth_app_token') != null){
						}
						localStorage.removeItem('auth_app_token');
						this.router.navigate(['/auth/login']);
					}
				}
            )) ;
    } else {
      return next.handle(req)
    }
  }
}
