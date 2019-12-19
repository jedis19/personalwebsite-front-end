import { Component, OnInit } from '@angular/core';
import { LoginUser } from './loginUser';
import { NgForm } from '@angular/forms';
import { AccserviceService } from 'src/app/services/accservice.service';
import {  delay } from 'rxjs/operators';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTimer:any; 
  model:LoginUser = new LoginUser()
  isShowError;
  justOnce:any=true;
  
  constructor(private accService:AccserviceService,private alertifyService:AlertifyjsService,private router:Router) {
    if(this.accService.isAuth){
    router.navigate[('')];
    }
   }
  
  

  ngOnInit() {
  }

  loginUser(model:LoginUser){
    if(this.justOnce){
      localStorage.getItem('justonce')
      this.alertifyService.warning('Backend Herokuda yüklü olduğu için ilk giriş işleminiz yavaş olucaktır!!! (Sebebi: Heroku bir süre sonra kendini kapatıp biri kullandığında tekrar çalışıyor.)')
      this.justOnce=false
    }
   
    clearTimeout(this.loginTimer)
    this.accService.login(model).pipe(delay(3000)).subscribe(data =>{
      
    },(error) => {
      this.isShowError = !this.accService.isAuth
      this.loginTimer = setTimeout(() =>{
        
        this.isShowError=false
      },2000)
    })
  
    
  }

  



}
