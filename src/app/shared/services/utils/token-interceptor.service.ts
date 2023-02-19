import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {   }

  intercept(req: HttpRequest<any>,next: any){
    let authService = this.injector.get(AuthService);

    let tokenRequest = req.clone({
      headers: req.headers.set('X-Auth-Token','83b0aafa91684ae0b0e039531210367a')
    });
    
    return next.handle(tokenRequest);
  }
}
