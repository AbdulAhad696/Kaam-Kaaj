import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Shared/Header/Header.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { FooterComponent } from './Shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutUsComponent } from './main-app/about-us/about-us.component';
import { EditSPModalComponent } from './service-provider/components/edit-spmodal/edit-spmodal.component';
import { ServiceProviderProfileComponent } from './service-provider/pages/service-provider-profile/service-provider-profile.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerLandingPageComponent } from './UserSite/customer-landing-page/customer-landing-page.component';

import { FilterBarComponent } from './UserSite/filter-bar/filter-bar.component';
import { ServiceComponent } from './UserSite/service/service.component';
import { RatingComponent } from './Shared/rating/rating.component';
import { ServiceProvidersComponent } from './UserSite/service-providers/service-providers.component';

import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { NgxRerenderModule } from 'ngx-rerender';
import { JobGigsComponent } from './UserSite/job-gigs/job-gigs.component';
import { SpViewjobsComponent } from './service-provider/pages/sp-viewjobs/sp-viewjobs.component';
import { ServiceprovidermainComponent } from './service-provider/pages/serviceprovidermain/serviceprovidermain.component';
import { GigCardComponent } from './service-provider/components/gig-card/gig-card.component';
import { CustomermainpageComponent } from './UserSite/customermainpage/customermainpage.component';
import * as CanvasJSAngularChart from '../canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { BidOverlayComponent } from './service-provider/components/bid-overlay/bid-overlay.component'
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ImgOverlayComponent } from './service-provider/components/img-overlay/img-overlay.component';



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
    ServiceProvidersComponent,
    JobGigsComponent,
    SpViewjobsComponent,
    ServiceprovidermainComponent,
    GigCardComponent,
    CustomermainpageComponent,
    CanvasJSChart,
    BidOverlayComponent,
    ImgOverlayComponent
  ],
  imports: [
    AppRoutingModule,
    GooglePayButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,

    NgxRerenderModule,
    NgxMaskModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
