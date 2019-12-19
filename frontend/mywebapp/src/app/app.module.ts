import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule }   from '@angular/forms';
import { AccserviceService } from './services/accservice.service';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AlertifyjsService } from './services/alertifyjs.service';
import { ChatComponent } from './components/chat/chat.component';
import { LoginGuard } from './components/auth/login/loginguard';
import { UserinterfaceComponent } from './components/UI/userinterface/userinterface.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    AboutmeComponent,
    ChatComponent,
    UserinterfaceComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  
  ],
  providers: [AccserviceService,AlertifyjsService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
