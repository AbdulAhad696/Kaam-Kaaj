import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesPageComponent } from './services-page/services-page.component';


const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path: 'signin',component:SignInComponent},
  {path:'',component:MainPageComponent},

  {path:'customer-mainpage',component:CustomerLandingPageComponent},

  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[SignUpComponent,SignInComponent,MainPageComponent,ContactUsComponent,AboutUsComponent]
