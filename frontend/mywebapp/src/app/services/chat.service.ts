import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment.prod'
import * as io from 'socket.io-client';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  path = environment.path;
  private socket;

  constructor() {
    this.socket = io(this.path)
   }

   sendMessage(message){
     this.socket.emit('new-message',message)
   }
 

    getMessage(){
      let observable = new Observable<{message:string,date:Date,username:string}>( observer => {
        this.socket.on('new-message', (message) => {
         
         observer.next(message);
      
        })
      })
      return observable;
    }

 

   

}
