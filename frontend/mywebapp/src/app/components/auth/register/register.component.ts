import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './registerUser';
import { NgForm } from '@angular/forms';
import { AccserviceService } from 'src/app/services/accservice.service';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AccserviceService]
})
export class RegisterComponent implements OnInit {
  isShowError;
  justOnce=true;
  loginTimer:any; 
  model:RegisterUser = new RegisterUser
  constructor(private accService:AccserviceService,private alertifyService:AlertifyjsService) { }

  ngOnInit() {
  }

  register(model:RegisterUser){
    if(this.justOnce){
      this.alertifyService.warning('Backend Herokuda yüklü olduğu için ilk kayıt olma işleminiz yavaş olucaktır!!! (Sebebi: Heroku bir süre sonra kendini kapatıp biri kullandığında tekrar çalışıyor.)')
      this.justOnce=false;
    }
   
    clearTimeout(this.loginTimer)
    this.accService.register(model).subscribe(data =>{
    this.alertifyService.success('Başarıyla Kayıt Oldunuz. Giriş Yapabilirsiniz')
    },(error) => {
      this.isShowError = !this.accService.isAuth
      this.loginTimer = setTimeout(() =>{
        
        this.isShowError=false
      },2000)
    })
  }

}
