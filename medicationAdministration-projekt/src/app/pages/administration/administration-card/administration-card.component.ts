import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MedicationAdministration, Ratio, CodeableConcept, Coding, Perfomer, Period, SimpleQuantity, Identifier, Dosage, Annotation } from './../../../shared/models/medication-administration';

@Component({
  selector: 'app-administration-card',
  templateUrl: './administration-card.component.html',
  styleUrls: ['./administration-card.component.scss']
})
export class AdministrationCardComponent implements OnInit {
  @Input() administration?: MedicationAdministration;

  @Output() callDetails = new EventEmitter<MedicationAdministration | null>();
  @Output() getAdministration = new EventEmitter<MedicationAdministration>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  information(event: any):void{
    event.stopPropagation();
    this.callDetails.emit(this.administration);
  }
}
