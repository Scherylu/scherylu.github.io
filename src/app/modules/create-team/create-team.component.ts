import { Component, OnInit } from '@angular/core';
import { CreateTeamService } from 'src/app/shared/services/modules/team/create-team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  showFiller = false;
  constructor(private  _teams: CreateTeamService) { }

  ngOnInit(): void {
    this.getListTeams();
  }

  getListTeams(){
    this._teams.getTeams().subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log(err.name + " " + err.message); console.log(err);
      }
    )
  }

}
