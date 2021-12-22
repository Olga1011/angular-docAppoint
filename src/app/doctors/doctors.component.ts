import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  providers: [DoctorService],
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[];

  constructor(private docService: DoctorService) {}
  ngOnInit() {
    this.doctors = this.docService.getDoctors();
  }
}
