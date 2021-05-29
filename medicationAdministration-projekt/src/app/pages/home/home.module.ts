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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdministrationAddModule } from '../administration/administration-add/administration-add.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdministrationCardModule,
    AdministrationAddModule,
    NavigationModule,
    LoginModule,
    RegisterModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
