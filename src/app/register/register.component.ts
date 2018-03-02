import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(public authService: AuthService, public router: Router, public toast: ToastrService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
        .then((res) => {
          this.toast.success('Registro exitoso');
         this.router.navigate(['/registro']);

        }).catch((err) => {
          this.toast.error('Error de registro')
          console.log(err);
    });
  }

}
