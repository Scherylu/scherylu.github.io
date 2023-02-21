import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CreateTeamComponent } from './modules/create-team/create-team.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/services/modules/auth/auth.service';
import { CreateTeamService } from './shared/services/modules/team/create-team.service';
import { TokenInterceptorService } from './shared/services/utils/token-interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavigationComponent, CreateTeamComponent],
  providers: [
    AuthService,
    CreateTeamService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class AppModule {}
