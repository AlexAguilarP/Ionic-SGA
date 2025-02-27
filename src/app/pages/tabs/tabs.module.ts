import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: '../registrar-qr/registrar-qr.module#RegistrarQRPageModule' },
      { path: 'tab2', loadChildren: '../registrar-externo/registrar-externo.module#RegistrarExternoPageModule' },
      { path: 'tab3', loadChildren: '../lista/lista.module#ListaPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
