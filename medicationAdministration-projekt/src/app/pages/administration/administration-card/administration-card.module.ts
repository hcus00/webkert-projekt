import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AdministrationCardComponent } from './administration-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AdministrationCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [AdministrationCardComponent]
})
export class AdministrationCardModule { }
