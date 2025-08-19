import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
     children: [
      {
        path: 'perfil',
        loadComponent: () => import('../perfil/perfil.page').then(m => m.PerfilPage)
      },
      {
        path: 'ajustes',
        loadComponent: () => import('../ajustes/ajustes.page').then(m => m.AjustesPage)
      },
      {
        path: 'inicio',
        loadComponent: () => import('../inicio/inicio.page').then(m => m.InicioPage)
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full'
      }
    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
