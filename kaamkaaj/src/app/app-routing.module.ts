import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLandingPageComponent } from './UserSite/customer-landing-page/customer-landing-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceProvidersComponent } from './UserSite/service-providers/service-providers.component';
import { FilterBarComponent } from './UserSite/filter-bar/filter-bar.component';


import { SignUpComponent } from './main-app/sign-up/sign-up.component';
import { SignInComponent } from './main-app/sign-in/sign-in.component';
import { MainPageComponent } from './main-app/main-page/main-page.component';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';
import { AboutUsComponent } from './main-app/about-us/about-us.component';
import { SpDashboardComponent } from './service-provider/pages/sp-dashboard/sp-dashboard.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path: 'signin',component:SignInComponent},
  {path:'',component:MainPageComponent},

  {path:'customer-mainpage',component:CustomerLandingPageComponent},


  
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesPageComponent},
  {path:'serviceproviders/:service',component:FilterBarComponent},
  {path:'spdashboard',canActivate:[AuthenticationGuard],component:SpDashboardComponent}
  // ,children:[{path:'',component:}]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[SignUpComponent,SignInComponent,MainPageComponent,ContactUsComponent,AboutUsComponent,SpDashboardComponent]
