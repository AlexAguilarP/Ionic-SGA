import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesModule } from '../../componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

import { RegistrarExternoPage } from './registrar-externo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarExternoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentesModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarExternoPage]
})
export class RegistrarExternoPageModule {}
