import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginGuard } from './components/auth/login/loginguard';
import { UserinterfaceComponent } from './components/UI/userinterface/userinterface.component';


const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

const routes: Routes = [
  
  {path:'',component:MainpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'aboutme',component:AboutmeComponent},
  {path:'chat',component:ChatComponent,canActivate:[LoginGuard]},
  {path:'me',component:UserinterfaceComponent,canActivate:[LoginGuard]},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
