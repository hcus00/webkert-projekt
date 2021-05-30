import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { AdministrationCardModule } from '../administration/administration-card/administration-card.module';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdministrationModifyModule } from '../administration/administration-modify/administration-modify.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    AdministrationCardModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    AdministrationModifyModule,
    MatCardModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
