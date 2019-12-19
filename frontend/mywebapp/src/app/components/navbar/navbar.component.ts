import { Component, OnInit } from '@angular/core';
import { AccserviceService } from 'src/app/services/accservice.service';
import { Router } from '@angular/router';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  constructor(private accService: AccserviceService, private router: Router,private alertifyService:AlertifyjsService) {
    router.events.subscribe((val) => {
      this.name = this.accService.userName
    })

  }



  ngOnInit() {


  }

  isLoggedIn() {
    return this.accService.isAuth
  }

  logOut() {
    this.accService.logOut()
    this.alertifyService.success('Başarıyla çıkış yaptınız')
  }





}
