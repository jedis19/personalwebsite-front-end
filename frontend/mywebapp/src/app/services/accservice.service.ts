import { Injectable, Injector } from '@angular/core';
import { RegisterUser } from '../components/auth/register/registerUser';
import { LoginUser } from '../components/auth/login/loginUser';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment.prod';
import {  Observable } from 'rxjs';
import {  tap,delay, find } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertifyjsService } from './alertifyjs.service';

@Injectable()
export class AccserviceService {
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'token'
    })
  };

  TOKEN_KEY="token"
  path= environment.path
  constructor(private http:HttpClient,private router:Router,private injector:Injector) { }
  alertifyService = this.injector.get(AlertifyjsService);

  register(registerUser:RegisterUser){

    return this.http.post(this.path+"/user/register",registerUser,this.httpOptions).pipe(tap( data =>{
      this.router.navigate([""])
    } ));
  } 

  login(loginUser:LoginUser){
  

    return this.http.post(this.path+"/user/login",loginUser,this.httpOptions).pipe(tap(data =>{
      this.alertifyService.success('Başarıyla Giriş Yapıldı.')
      this.alertifyService.success("Hoşgeldin: "+data['name'])
      this.saveUserName(data['name'])
      this.saveLastName(data['lastName'])
      this.saveEmail(data['email'])
      this.saveToken(data['token'])
      this.router.navigate([""])
    
    },(error)=>{
      
    }))

  }


  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
    localStorage.removeItem('name')
    localStorage.removeItem('lastname')
    localStorage.removeItem('email')
  }

  saveUserName(userName){
    localStorage.setItem('name',userName)
  }
  saveLastName(lastName){
    localStorage.setItem('lastname',lastName)
  }
  saveEmail(email){
    localStorage.setItem('email',email)
  }

  get isAuth(){
    return !! localStorage.getItem(this.TOKEN_KEY)
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get userName(){
    return localStorage.getItem('name');
  }

  get lastName(){
    return localStorage.getItem('lastname');
  }

  get email(){
    return localStorage.getItem('email');
  }

 


 
}
