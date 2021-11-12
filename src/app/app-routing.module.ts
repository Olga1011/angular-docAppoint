import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { BlogComponent } from './blog/blog.component';
import { CabinetComponent } from './cabinet/cabinet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cabinet', component: CabinetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
