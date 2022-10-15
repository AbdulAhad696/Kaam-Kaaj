import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Header/Header.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';

import { FilterBarComponent } from './filter-bar/filter-bar.component';

import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceComponent } from './service/service.component';
import { RatingComponent } from './rating/rating.component';
import { AllServicesComponent } from './all-services/all-services.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingcomponents,

    SpinnerComponent,
    CustomerLandingPageComponent,

    ContactUsComponent,
    AboutUsComponent,
    SpinnerComponent,

    FilterBarComponent,

    ServicesPageComponent,
    ServiceComponent,
    RatingComponent,
    AllServicesComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
