import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLandingPageComponent } from './UserSite/customer-landing-page/customer-landing-page.component';
import { ServiceProvidersComponent } from './UserSite/service-providers/service-providers.component';
import { FilterBarComponent } from './UserSite/filter-bar/filter-bar.component';
import { SignUpComponent } from './main-app/sign-up/sign-up.component';
import { SignInComponent } from './main-app/sign-in/sign-in.component';
import { MainPageComponent } from './main-app/main-page/main-page.component';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';
import { AboutUsComponent } from './main-app/about-us/about-us.component';
import { SpDashboardComponent } from './service-provider/pages/sp-dashboard/sp-dashboard.component';
import { ServiceComponent } from './UserSite/service/service.component';
import { AuthenticationGuard } from './auth-guards/authentication.guard';
import { AdminGuardGuard } from './auth-guards/admin-guard.guard';
import { ClientGuardGuard } from './auth-guards/client-guard.guard';
import { ServiceProviderProfileComponent } from './service-provider/pages/service-provider-profile/service-provider-profile.component';

import { SpViewjobsComponent } from './service-provider/pages/sp-viewjobs/sp-viewjobs.component';
import { ServiceprovidermainComponent } from './service-provider/pages/serviceprovidermain/serviceprovidermain.component';
import { JobGigsComponent } from './UserSite/job-gigs/job-gigs.component';
import { CustomermainpageComponent } from './UserSite/customermainpage/customermainpage.component';
import { MyProjectsComponent } from './service-provider/components/my-projects/my-projects.component';
import { BidingsComponent } from './UserSite/bidings/bidings.component';



const routes: Routes = [
  // Main page, Sign In, Sign up Components routing
  { path: '', component: MainPageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },

  {
    path: 'customer-mainpage',
    canActivate: [ClientGuardGuard],
    component: CustomermainpageComponent,
    children: [
      { path: '', component: CustomerLandingPageComponent },
      { path: 'jobgigs', component: JobGigsComponent },
      { path: 'jobgigs/:category/:id', component: JobGigsComponent },
      { path: 'contactadmin', component: ContactUsComponent },
      { path: 'serviceproviders/:service', component: FilterBarComponent },
      { path: 'serviceprovider/profile/:email', component: ServiceProviderProfileComponent },
      { path: 'job/bids/:id',component:BidingsComponent}
    ]
  },


  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'services', component: ServiceComponent },


  {
    path: 'service-provider',
    canActivate: [AuthenticationGuard],
    component: ServiceprovidermainComponent,
    children: [{ path: '', component: SpDashboardComponent },
    { path: 'viewjobs', component: SpViewjobsComponent },
    { path: 'contactadmin', component: ContactUsComponent },
    { path: 'profile/:email', component: ServiceProviderProfileComponent },
    { path: 'myprojects' , component:MyProjectsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [SignUpComponent,
  SignInComponent,
  MainPageComponent,
  ContactUsComponent,
  AboutUsComponent,
  SpDashboardComponent,
  SpViewjobsComponent,
]
