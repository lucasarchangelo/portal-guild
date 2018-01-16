import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuardMember } from './guards/auth-guard-member';
import { WaitingAcceptComponent } from './waiting-accept/waiting-accept.component';
import { AuthGuard } from './guards/auth-guard';
import { AdmMembrosComponent } from './adm-membros/adm-membros.component';
import { EventosComponent } from './eventos/eventos.component';
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { AdmEventosComponent } from './adm-eventos/adm-eventos.component';
import { AdmJogosComponent } from './adm-jogos/adm-jogos.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'new-user', component: NewUserComponent},
    { path: 'waiting-accept', component: WaitingAcceptComponent},
    { path: 'eventos', component: EventosComponent, canActivate: [AuthGuardMember]},
    { path: 'adm-eventos', component: AdmEventosComponent, canActivate: [AuthGuardMember]},
    { path: 'adm-membros', component: AdmMembrosComponent, canActivate: [AuthGuard]},
    { path: 'adm-game', component: AdmJogosComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
