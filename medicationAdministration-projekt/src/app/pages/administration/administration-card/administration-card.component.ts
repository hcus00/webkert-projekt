import { Component, Input, OnInit } from '@angular/core';
import { MedicationAdministration, Ratio, CodeableConcept, Coding, Perfomer, Period, SimpleQuantity, Identifier, Dosage, Annotation } from './../../../shared/models/medication-administration';

@Component({
  selector: 'app-administration-card',
  templateUrl: './administration-card.component.html',
  styleUrls: ['./administration-card.component.scss']
})
export class AdministrationCardComponent implements OnInit {
  @Input() administration?: MedicationAdministration;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
