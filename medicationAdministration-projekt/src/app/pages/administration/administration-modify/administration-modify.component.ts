import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { administrationForm } from 'src/app/shared/forms/administration.forms';
import { MedicationAdministration } from 'src/app/shared/models/medication-administration';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'app-administration-modify',
  templateUrl: './administration-modify.component.html',
  styleUrls: ['./administration-modify.component.scss']
})
export class AdministrationModifyComponent implements OnInit {

  form: FormGroup = administrationForm();
  id: string | null = '';
  administration: MedicationAdministration | null = DetailsComponent.prototype.administration;
  
  constructor(private service: FbBaseService<any>, private route: ActivatedRoute, public dialog: MatDialogRef<AdministrationModifyComponent>) { 
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

  modify(): void {
    if (this.id != null){
      this.service.update('MedicationAdministration', this.id, this.administration);
    }
    this.dialog.close();
  }

}
