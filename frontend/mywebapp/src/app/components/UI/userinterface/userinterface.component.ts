import { Component, OnInit } from '@angular/core';
import { AccserviceService } from 'src/app/services/accservice.service';

@Component({
  selector: 'app-userinterface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.css']
})
export class UserinterfaceComponent implements OnInit {
  firstName;
  lastName;
  email;
  constructor(private accService:AccserviceService) { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo(){
    this.lastName = this.accService.lastName;
    this.firstName = this.accService.userName;
    this.email = this.accService.email;

  }

}
