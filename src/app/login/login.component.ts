import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor( public authService: AuthService, public router: Router, public toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
        .then((res) => {
          this.toastr.success('Inicio de sesión exitoso')
          this.router.navigate(['/home']);
        }).catch((err) => {
          this.toastr.error('Email o contraseña invalido')
          this.router.navigate(['/login']);
    });
  }
}
