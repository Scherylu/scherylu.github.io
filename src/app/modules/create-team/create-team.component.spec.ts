import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from 'src/app/shared/services/modules/auth/auth.service';
import { CreateTeamService } from 'src/app/shared/services/modules/team/create-team.service';
import { TokenInterceptorService } from 'src/app/shared/services/utils/token-interceptor.service';

import { CreateTeamComponent } from './create-team.component';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateTeamComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('field inicialitation', () => {
    const fixture = TestBed.createComponent(CreateTeamComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let _field = component._field; 
    expect(_field).not.toBeNull();
  });

  it('field have all the position', () => {
    const fixture = TestBed.createComponent(CreateTeamComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let _field = component._field;

    expect(_field.attackers).not.toBeNull();
    expect(_field.coach).not.toBeNull();
    expect(_field.defenders).not.toBeNull();
    expect(_field.midfielders).not.toBeNull();
    expect(_field.goalkeepers).not.toBeNull();
  });

  it('Requirements of the fields', () => {
    const fixture = TestBed.createComponent(CreateTeamComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let _listAttackers = [{ position: 'Attacker1', name: 'Attacker1' }];
    let _listMidfielders = [{ position: 'Midfield1', name: 'Midfield1' }];
    let _listDefenders = [{ position: 'Defence1', name: 'Defence1' }];
    let _listGoalkeepers = [{ position: 'Goalkeeper1', name: 'Goalkeeper1' }];
    let _coach = "coach";
    let _field = {
      attackers: _listAttackers,
      midfielders: _listMidfielders,
      defenders: _listDefenders,
      goalkeepers: _listGoalkeepers,
      coach: _coach
    }

    expect((_field.defenders.filter(def => def.name != '').length < 4) || (_field.midfielders.filter(mid => mid.name != '').length < 4)).toBeTruthy();
    expect((_field.attackers.filter(def => def.name != '').length < 2) || (_field.goalkeepers.filter(def => def.name != '').length < 2)).toBeTruthy();
    expect(_field.coach != "").toBeTruthy();
  });

});
