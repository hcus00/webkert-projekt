import { Component, OnInit } from '@angular/core';
import { ADMINISTRATIONS } from 'src/app/shared/database/medication-administration.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  administrations = ADMINISTRATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
