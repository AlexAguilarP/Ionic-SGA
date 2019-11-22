import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPage } from './lista.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
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
  declarations: [ListaPage]
})
export class ListaPageModule {}
