import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  specialities = [
    { id: 1, name: 'Addiction medicine' },
    { id: 2, name: 'Anaesthesia' },
    { id: 3, name: 'General practice' },
    { id: 4, name: 'Intensive caremedicine' },
    { id: 5, name: 'Obstetrics and gynaecology' },
    { id: 6, name: 'Ophthalmology' },
    { id: 7, name: 'Paediatrics and childhealth' },
    { id: 8, name: 'Pathology' },
    { id: 9, name: 'Physician' },
    { id: 10, name: 'Psychiatry' },
    { id: 11, name: 'Radiation oncology' },
    { id: 12, name: 'Rehabilitation medicine' },
  ];

  ngOnInit(): void {}
}
