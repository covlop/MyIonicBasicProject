import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LugarPage } from './lugar/lugar.page';
import { HomePage } from './home/home.page';
import { TabsPage } from './tabs/tabs.page';
import { PerfilPage } from './perfil/perfil.page';
import {  AjustesPage } from './ajustes/ajustes.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
     children: [
      {
        path: 'perfil',
        loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
      },
      {
        path: 'ajustes',
        loadComponent: () => import('./ajustes/ajustes.page').then(m => m.AjustesPage)
      },
      {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/inicio',
    pathMatch: 'full'
  },
  {
    path: 'lugar',
    loadComponent: () => import('./lugar/lugar.page').then(m => m.LugarPage)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
