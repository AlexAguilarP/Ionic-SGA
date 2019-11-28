import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registrar-qr', loadChildren: './pages/registrar-qr/registrar-qr.module#RegistrarQRPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'registrar-externo', loadChildren: './pages/registrar-externo/registrar-externo.module#RegistrarExternoPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'ver-actividad/:id', loadChildren: './pages/ver-actividad/ver-actividad.module#VerActividadPageModule' },  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'act-designada', loadChildren: './pages/act-designada/act-designada.module#ActDesignadaPageModule' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
