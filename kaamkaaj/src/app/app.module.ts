import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Shared/Header/Header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutUsComponent } from './main-app/about-us/about-us.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { EditSPModalComponent } from './edit-spmodal/edit-spmodal.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';

import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';

import { FilterBarComponent } from './filter-bar/filter-bar.component';

import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceComponent } from './service/service.component';
import { RatingComponent } from './rating/rating.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';

import { SpinnerComponent } from './Shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingcomponents,
    ContactUsComponent,
    AboutUsComponent,
    SpinnerComponent,
    ServiceProviderProfileComponent,
    EditSPModalComponent,

    SpinnerComponent,
    CustomerLandingPageComponent,
    SpinnerComponent,

    FilterBarComponent,

    ServicesPageComponent,
    ServiceComponent,
    RatingComponent,
    AllServicesComponent,
    ServiceProvidersComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    MatDialogModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
