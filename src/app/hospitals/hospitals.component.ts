import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css'],
})
export class HospitalsComponent implements OnInit {
  constructor() {}

  listOfHospitals = [
    {
      id: 1,
      name: 'German Medical center',
      info: ' german  osjcvwkenrvkn ijsdbcundcshd cwnkdjnc',
    },
    { id: 2, name: 'Medical Park', info: 'medical park medicalllldwjbcwiehc' },
  ];

  ngOnInit(): void {}
}
