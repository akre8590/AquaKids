import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GruposComponent } from './grupos/grupos.component';
//guard
import { LoginGuard } from './shared/guard/login.guard';
var APP_ROUTES = [
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'empleados', component: EmployeesComponent, canActivate: [LoginGuard] },
    { path: 'alumnos', component: AlumnosComponent, canActivate: [LoginGuard] },
    { path: 'registro', component: RegisterComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'grupos', component: GruposComponent, canActivate: [LoginGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map