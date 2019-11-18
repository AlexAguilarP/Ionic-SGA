import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerActividadPage } from './ver-actividad.page';
import { ComponentesModule } from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: VerActividadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerActividadPage]
})
export class VerActividadPageModule {}
