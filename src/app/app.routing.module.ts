import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: NewUserComponent },
    { path: 'login', component: LoginComponent},   
    { path: 'new-user', component: NewUserComponent},
    { path: 'eventos', component: EventosComponent},
    { path: 'admin', component: AdminComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}