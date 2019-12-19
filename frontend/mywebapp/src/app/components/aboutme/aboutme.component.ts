import { Component, OnInit } from '@angular/core';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  providers:[AlertifyjsService]
})
export class AboutmeComponent implements OnInit {

  constructor(private alertifyJs:AlertifyjsService) { }

  ngOnInit() {

  }




}
