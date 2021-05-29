import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(public dialogRef: MatDialogRef<AdministrationAddComponent>) { }

  ngOnInit(): void {
  }

  add(): void {
    
  }
}
