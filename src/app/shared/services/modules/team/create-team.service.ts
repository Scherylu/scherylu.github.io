import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Competition, Team } from '../../../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTeamService {

  private _domain = 'https://api.football-data.org'; 
  private _teamsURL= "/v4/competitions/2000/teams" ;
  
  constructor(
    private http: HttpClient,
    private _route: Router
    ) {
     }
  
    createAuthorizationHeader(headers: HttpHeaders) {
      headers.append('X-Auth-Token','83b0aafa91684ae0b0e039531210367a'); 
      headers.append('Accept', '*/*');
      headers.append('Host', 'api.football-data.org');
    }

    createLocalStorage(headers: HttpHeaders) {
      localStorage.setItem('X-Auth-Token','83b0aafa91684ae0b0e039531210367a');
    }
  /*getTeams(){
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get<any>(this._teamsURL);
  }*/


   getCompetition(idCompetition?:number): Promise<Competition> {
    let _errorTeams = 'The data requested is not available. Try again later.';
      return new Promise((resolve, reject) => {
        this.http.get("../assets/data/teams-wc.json")
        .subscribe((response: any) =>{
          resolve(response);
        },
        () =>{
          reject(_errorTeams);
        }
        );
      });
  }

  getTeam(idCompetition?:number, idTeam?: number): Promise<Team> {
    let _errorTeams = 'The data requested is not available. Try again later.';
      return new Promise((resolve, reject) => {
        this.http.get("../assets/data/json-team.json")
        .subscribe((response: any) =>{
          resolve(response);
        },
        () =>{
          reject(_errorTeams);
        }
        );
      });
  }
}
