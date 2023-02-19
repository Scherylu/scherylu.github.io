import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _domain = 'https://api.football-data.org'; 

  constructor(private http: HttpClient) { }

  //Método auxiliar que obtiene el token en el lado cliente, para verificar autenticidad.
  getToken(){
    return localStorage.getItem('X-Auth-Token');
  }
}
