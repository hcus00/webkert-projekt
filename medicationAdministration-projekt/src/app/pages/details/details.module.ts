import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { AdministrationCardModule } from '../administration/administration-card/administration-card.module';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    AdministrationCardModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
