import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private router: Router, private tostr: ToastrService, private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.afAuth.authState
            .take(1)
            .map(authState => !! authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.tostr.error('Inicia Sesión por favor');
                    this.router.navigate(['/login']);
                }
            });
    }
}
