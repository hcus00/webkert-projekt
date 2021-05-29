import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MedicationAdministration } from 'src/app/shared/models/medication-administration';

@Component({
  selector: 'app-administration-add',
  templateUrl: './administration-add.component.html',
  styleUrls: ['./administration-add.component.scss']
})
export class AdministrationAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
      id: new FormControl(''),
      effective: new FormControl(''),
      medication: new FormControl(''),
      status: new FormControl(''),
      subject: new FormControl('')
  });

  constructor( private service: FbBaseService<MedicationAdministration>) { }

  //public dialogRef: MatDialogRef<AdministrationAddComponent>,
  ngOnInit(): void {
  }

  add(): void {
    var administration: MedicationAdministration = {id: '', effective: this.form.value.effective, medication: this.form.value.medication, status: this.form.value.status, subject: this.form.value.subject};

    this.service.add('MedicationAdministration', administration);
  }
}
