import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AdministrationCardModule } from '../administration/administration-card/administration-card.module';
import { NavigationModule } from '../navigation/navigation.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdministrationCardModule,
    NavigationModule,
    LoginModule,
    RegisterModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DetailsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
