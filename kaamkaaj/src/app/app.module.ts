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
import { EditSPModalComponent } from './edit-spmodal/edit-spmodal.component';
import { ServiceProviderProfileComponent } from './service-provider/pages/service-provider-profile/service-provider-profile.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';

import { CustomerLandingPageComponent } from './UserSite/customer-landing-page/customer-landing-page.component';

import { FilterBarComponent } from './UserSite/filter-bar/filter-bar.component';

import { ServiceComponent } from './UserSite/service/service.component';
import { RatingComponent } from './Shared/rating/rating.component';
import { ServiceProvidersComponent } from './UserSite/service-providers/service-providers.component';

import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { NgxRerenderModule } from 'ngx-rerender';


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
    CustomerLandingPageComponent,
    FilterBarComponent,
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
    MatDialogModule,
    BrowserModule,
    NgxRerenderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
