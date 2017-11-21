import { AuthGuard } from './guards/auth-guard';
import { AdmMembrosComponent } from './adm-membros/adm-membros.component';
import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { AdmEventosComponent } from './adm-eventos/adm-eventos.component';

const appRoutes: Routes = [
    { path: '', component: NewUserComponent },
    { path: 'login', component: LoginComponent},
    { path: 'new-user', component: NewUserComponent},
    { path: 'eventos', component: EventosComponent},
    { path: 'adm-membros', component: AdmMembrosComponent, canActivate: [AuthGuard]},
    { path: 'adm-eventos', component: AdmEventosComponent, canActivate: [AuthGuard]}
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
