import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Forms
import { FormsModule} from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { AuthService } from './shared/services/auth.service';

//Components
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';
import { AlumnoListaComponent } from './alumnos/alumno-lista/alumno-lista.component';
import { EmployeeSearchComponent } from './employees/employee-search/employee-search.component';
import { AlumnoSearchComponent } from './alumnos/alumno-search/alumno-search.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './shared/guard/login.guard';
import {NoLoginGuard} from './shared/guard/no-login.guard';
import { RegisterComponent } from './register/register.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo/grupo.component';
import { GruposListComponent } from './grupos/grupos-list/grupos-list.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NavbarComponent,
    HomeComponent,
    AlumnosComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    EmployeeSearchComponent,
    AlumnoSearchComponent,
    LoginComponent,
    RegisterComponent,
    GruposComponent,
    GrupoComponent,
    GruposListComponent,


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
      APP_ROUTING,
      AngularFireAuthModule
  ],
  providers: [LoginGuard, NoLoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
