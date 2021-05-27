import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AdministrationCardComponent } from './administration-card.component';


@NgModule({
  declarations: [AdministrationCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [AdministrationCardComponent]
})
export class AdministrationCardModule { }
