import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

import { RegistrarQRPage } from './registrar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarQRPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component:   RegistrarQRPage }]),
    ComponentesModule
  ],
  declarations: [RegistrarQRPage]
})
export class RegistrarQRPageModule {}
