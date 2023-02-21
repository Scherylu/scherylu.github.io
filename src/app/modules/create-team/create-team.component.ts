import { Component, OnInit } from '@angular/core';
import { Competition, Squad, Team, Field, SelectPlayer } from 'src/app/shared/model/team.model';
import { CreateTeamService } from 'src/app/shared/services/modules/team/create-team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  _showFiller = false;
  _listTeams: Array<Team> = [];
  _listSquads: Array<Squad> = [];
  _selectedTeam: any;
  _selectedPosition: string = '';
  _field: Field;
  _listAttackers: Array<SelectPlayer> = [{ position: 'Attacker1', name: '' }, { position: 'Attacker2', name: '' }, { position: 'Attacker3', name: '' }];
  _listMidfielders: Array<SelectPlayer> = [{ position: 'Midfield1', name: '' },
                                           { position: 'Midfield2', name: '' }, { position: 'Midfield3', name: '' },
                                           { position: 'Midfield4', name: '' }, { position: 'Midfield5', name: '' }];
  _listDefenders: Array<SelectPlayer> = [{ position: 'Defence1', name: '' },
                                         { position: 'Defence2', name: '' }, { position: 'Defence3', name: '' },
                                         { position: 'Defence4', name: '' }, { position: 'Defence5', name: '' }];
  _listGoalkeepers: Array<SelectPlayer> = [{ position: 'Goalkeeper1', name: '' }, { position: 'Goalkeeper2', name: '' }, { position: 'Goalkeeper3', name: '' }];
  _alertMsg:string = "";


  constructor(private _teamsService: CreateTeamService) {
    this._field = {
      attackers: this._listAttackers,
      midfielders: this._listMidfielders,
      defenders: this._listDefenders,
      goalkeepers: this._listGoalkeepers,
      coach: 'Coach'
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getListTeams();
    this.getTeamById();
  }

  getListTeams() {

    this._teamsService.getCompetition().then((response: Competition) => {
      this._listTeams = response.teams;
    })
      .catch((error) => {
      })
      .finally(() => {
      });
  }


  getTeamById(idCompetition?: number, idTeam?: number) {

    this._teamsService.getTeam().then((response: Team) => {
      this._selectedTeam = response;
      this._listSquads = response.squad;
    })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  changeTeam() {
    // this._listSquads = [];
    if (this._selectedTeam.name == "Argentina") {
      this.getTeamById();
    }
    //this.getTeamById();
  }

  selectPlayer(position: string) {
    this._alertMsg = "";
    this._selectedPosition = position;
  }

  choosePlayer(player: Squad) {
    this._alertMsg = "";
    let index = 0;
    let msg = "";
    //this._field.attackers.find(att => att.name == player.name);
    if (this._selectedPosition.includes('Attacker')) {
      index = this._field.attackers.findIndex(att => att.position == this._selectedPosition);
      this._field.attackers[index].name = player.name;
    } else if (this._selectedPosition.includes('Midfield')) {
      index = this._field.midfielders.findIndex(att => att.position == this._selectedPosition);
      this._field.midfielders[index].name = player.name;
    } else if (this._selectedPosition.includes('Defence')) {
      index = this._field.defenders.findIndex(att => att.position == this._selectedPosition);
      this._field.defenders[index].name = player.name;
    } else if (this._selectedPosition.includes('Goalkeeper')) {
      index = this._field.goalkeepers.findIndex(att => att.position == this._selectedPosition);
      this._field.goalkeepers[index].name = player.name;
    } else if (this._selectedPosition.includes('Coach')) {
      this._field.coach = player.name;
    } 

    this._alertMsg = msg;
  }

  initField(num?: number, position?: string) {
    /*for(let i=0; i<num;i++){

    }*/
  }

  saveField(){
    this._alertMsg = "";
    let msg = "";
    if(!this._field){
      msg = 'Complete your field.';
    }else{
      if((this._field.defenders.filter(def => def.name != '').length < 4) || (this._field.midfielders.filter(mid => mid.name != '').length < 4)){
        msg = 'You have to choose at least 4 defenders and 4 midfielders.';
      }
      if((this._field.attackers.filter(def => def.name != '').length < 2) || (this._field.goalkeepers.filter(def => def.name != '').length < 2)){
        msg = 'You have to choose at least 2 attackers and 2 goalkeepers.';
      }
      if(this._field.coach == "Coach"){
        msg = 'You have to choose at least 1 coach.';
      }
    }
    this._alertMsg = msg;
  }

}
