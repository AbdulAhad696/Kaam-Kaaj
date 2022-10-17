import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Shared/Header/Header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';

import { FilterBarComponent } from './filter-bar/filter-bar.component';

import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceComponent } from './service/service.component';
import { RatingComponent } from './rating/rating.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';

import { SpinnerComponent } from './Shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingcomponents,

    SpinnerComponent,
    CustomerLandingPageComponent,
    SpinnerComponent,

    FilterBarComponent,

    ServicesPageComponent,
    ServiceComponent,
    RatingComponent,  
    ServiceProvidersComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
