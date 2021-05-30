import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { administrationForm } from 'src/app/shared/forms/administration.forms';
import { codeableConceptForm } from 'src/app/shared/forms/codeableconcept.forms';
import { identifierForm } from 'src/app/shared/forms/identifier.forms';
import { MedicationAdministration } from 'src/app/shared/models/medication-administration';

@Component({
  selector: 'app-administration-add',
  templateUrl: './administration-add.component.html',
  styleUrls: ['./administration-add.component.scss']
})
export class AdministrationAddComponent implements OnInit {

  form: FormGroup = administrationForm();
  codeableConceptForm: FormGroup = codeableConceptForm();

  constructor( private service: FbBaseService<any>, public dialog: MatDialogRef<AdministrationAddComponent>) { }

  ngOnInit(): void {
  }

  get getIdentifier(): FormArray {
    return this.form?.get('identifier') as FormArray;
  }

  get getSupportInformation(): FormArray {
    return this.form.get('supportInformation') as FormArray;
  }

  addIdentifier(): void {
    const identifierFormArray = this.form?.get('identifier') as FormArray;
    identifierFormArray.push(identifierForm());
  }

  addSupportInformation(): void {
    const identifierFormArray = this.form?.get('supportInformation') as FormArray;
    identifierFormArray.push(new FormControl());
  }

  //get getCodeableConcept()

  add(): void {
    //var supportInformationArray: string = (this.form.get('supportInformation') as FormArray).get([0])
    var administration: MedicationAdministration = {
      id: '', 
      effective: this.form.value.effective, 
      medication: this.form.value.medication, 
      status: this.form.value.status, 
      subject: this.form.value.subject,
      context: this.form.value.context,
      request: this.form.value.request,
      //supportInformation[]:
    };

    this.service.add('MedicationAdministration', administration);
    this.dialog.close();
    
  }
}
