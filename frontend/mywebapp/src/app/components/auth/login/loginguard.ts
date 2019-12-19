import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccserviceService } from 'src/app/services/accservice.service';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';

@Injectable()

export class LoginGuard implements CanActivate {

    constructor(private accService:AccserviceService,private router:Router,private alertifyService:AlertifyjsService){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let logged = this.accService.isAuth

        if(logged){
            return true;
        }
        this.router.navigate(["login"])
        this.alertifyService.error('Bu özelliği kullanabilmeniz için giriş yapmanız gerekmektedir')
        return false;
    }   
}