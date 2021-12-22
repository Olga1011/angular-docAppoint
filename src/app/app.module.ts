import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DocProfileComponent } from './doctors/doc-profile/doc-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DoctorEditComponent } from './doctors/doctor-edit/doctor-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DoctorsComponent,
    DocProfileComponent,
    FooterComponent,
    ContactsComponent,
    DoctorEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
