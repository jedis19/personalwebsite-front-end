import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AccserviceService } from 'src/app/services/accservice.service';
import { Router } from '@angular/router';
import { messageUser } from './message';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  message: string;
  myName: any;
  userName
  messages: messageUser[] = []

  
  

  constructor(private chatService: ChatService, private accService: AccserviceService, private router: Router) {
    this.chatService.getMessage().subscribe((data) => {

      this.messages.push(data);    
      
    })
    router.events.subscribe((val) => {

      this.userName = this.accService.userName
     
    })

  }

  ngOnInit() {

  }

  sendMessage() {
    this.chatService.sendMessage({message:this.message,username:this.userName});
    
    this.message = "" 
    
  }





}
