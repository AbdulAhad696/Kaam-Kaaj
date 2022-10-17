import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { EditSPModalComponent } from './edit-spmodal/edit-spmodal.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';



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
    EditSPModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
