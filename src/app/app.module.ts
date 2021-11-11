import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DocProfileComponent } from './doctors/doc-profile/doc-profile.component';
import { BlogComponent } from './blog/blog.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HospitalsComponent,
    DoctorsComponent,
    DocProfileComponent,
    BlogComponent,
    CabinetComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
