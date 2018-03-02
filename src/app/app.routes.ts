import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//guard
import {LoginGuard} from './shared/guard/login.guard';
import {NoLoginGuard} from './shared/guard/no-login.guard';
import {UserGuard} from './shared/guard/user.guard';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
    { path: 'empleados', component: EmployeesComponent, canActivate: [LoginGuard]},
    { path: 'alumnos', component: AlumnosComponent, canActivate: [LoginGuard]},
    { path: 'registro', component: RegisterComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);