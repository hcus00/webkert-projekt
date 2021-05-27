import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AdministrationCardModule } from '../administration/administration-card/administration-card.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdministrationCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
