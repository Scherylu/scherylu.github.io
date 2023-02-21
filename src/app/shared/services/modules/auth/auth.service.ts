import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _domain = 'https://api.football-data.org'; 

  constructor() { }

  //method that gets the token on the client side, to verify authenticity in case exist an api for authentication.
  getToken(){
    return localStorage.getItem('X-Auth-Token');
  }
}
