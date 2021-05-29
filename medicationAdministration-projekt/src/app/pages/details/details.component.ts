import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MedicationAdministration } from 'src/app/shared/models/medication-administration';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Output() callSelectPage = new EventEmitter<string>();
  id: string | null = '';
  administration: MedicationAdministration | null = null;

  constructor(private route: ActivatedRoute, private service: FbBaseService<any>) { 
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('administrationId');
  }

  ngOnInit(): void {
    if (this.id != null) {
      var administrationObs: Observable<MedicationAdministration> = this.service.getById('MedicationAdministration', this.id);
      administrationObs.subscribe((r: MedicationAdministration) => {
        this.administration = r;
      });
    }
  }

  delete(): void {
    if (this.id != null) {
      this.service.delete('MedicationAdministration', this.id);
    }
  }

}
