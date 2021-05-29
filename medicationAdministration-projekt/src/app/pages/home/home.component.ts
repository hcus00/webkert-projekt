import { Component, OnInit } from '@angular/core';
import { ADMINISTRATIONS } from 'src/app/shared/database/medication-administration.database';
import { MatDialog } from '@angular/material/dialog';
import { MedicationAdministration } from 'src/app/shared/models/medication-administration';
import { AdministrationAddComponent } from '../administration/administration-add/administration-add.component';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  administrations = ADMINISTRATIONS;
  page = 'home';
  detailData: any;

  list: Observable<MedicationAdministration[]> | null = null;

  constructor(private service: FbBaseService<MedicationAdministration>, private dialog: MatDialog) { }

  get(): void {
    this.list = this.service.get('MedicationAdministration');
  }

  ngOnInit(): void {
    this.get();
  }

  /*ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event:string): void{
      this.category = event;
  }*/

  goToDetails(event: MedicationAdministration): void {
    this.detailData = event;
    this.page = 'details';
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(AdministrationAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.administrations.push(result);
      }
    });
  }

}
