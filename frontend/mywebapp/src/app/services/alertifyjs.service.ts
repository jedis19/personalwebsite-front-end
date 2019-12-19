import { Injectable } from '@angular/core';
declare let alertify:any

@Injectable({
  providedIn:"root"
})
export class AlertifyjsService {

  constructor() { }

  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message)
  }
  notify(message:string){
    alertify.notify(message)
  }
  warning(message:string){
    alertify.warning(message,7);
  }
}
