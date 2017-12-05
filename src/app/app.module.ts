import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuardMember } from './guards/auth-guard-member';
import { UserService } from './new-user/user.service';
import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './login/auth.service';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EventosComponent } from './eventos/eventos.component';
import { AdmMembrosComponent } from './adm-membros/adm-membros.component';
import { AdmMembrosService } from './adm-membros/adm-membros.service';
import { AuthGuard } from './guards/auth-guard';
import { AdmEventosComponent } from './adm-eventos/adm-eventos.component';
import { AdmEventosService } from './adm-eventos/adm-eventos.service';
import { EventosService } from './eventos/eventos.service';
import { ArrayFilterPipe } from './eventos/array-filter.pipe';
import { WaitingAcceptComponent } from './waiting-accept/waiting-accept.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NewUserComponent,
    EventosComponent,
    AdmMembrosComponent,
    AdmEventosComponent,
    ArrayFilterPipe,
    WaitingAcceptComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    AuthGuardMember,
    AdmMembrosService,
    AdmEventosService,
    EventosService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
