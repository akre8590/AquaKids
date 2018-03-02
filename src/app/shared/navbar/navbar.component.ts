import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public  nombreUsuario: string;
  public emailUsuario: string;
  public isAdmin: boolean;

  constructor(public authService: AuthService, private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
      this.authService.getAuth().subscribe( auth => {
          if (auth && auth.email === 'casas.diego@outlook.com') {
              this.isAdmin = true;
          } else {
              this.isAdmin = false;
          }
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.warning('Sesión finalizada');
  }
}
