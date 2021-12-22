import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctor.model';

@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.scss'],
})
export class DocProfileComponent implements OnInit {
  @Input()
    doctor: Doctor;
  constructor() {}

  ngOnInit() {}
}
