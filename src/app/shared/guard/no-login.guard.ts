import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class NoLoginGuard implements CanActivate {
  constructor (private router: Router,
               private afAuth: AngularFireAuth,
               private authService: AuthService,
               private toast: ToastrService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.afAuth.authState
          .take(1)
          .map(authState => !! authState )
          .do (authenticated => {
              if (authenticated) {
                  this.toast.error('Cerrar sesión por favor');
                  this.router.navigate(['/home']);
              }
          });
  }
}
