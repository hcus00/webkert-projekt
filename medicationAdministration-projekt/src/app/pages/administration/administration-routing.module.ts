import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationAddComponent } from './administration-add/administration-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  },
  {
    path: 'add',
    loadChildren: () => import('./administration-add/administration-add.module').then(m => m.AdministrationAddModule),
    component: AdministrationAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
