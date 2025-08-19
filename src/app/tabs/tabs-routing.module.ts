import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        loadComponent: () =>
          import('../perfil/perfil.page').then(m => m.PerfilPage)
      },
       {
        path: 'tabs',
        loadComponent: () =>
          import('../tabs/tabs.page').then(m => m.TabsPage)
      },
       {
        path: 'feed',
        loadComponent: () =>
          import('../home/home.page').then(m => m.HomePage)
      },
      {
        path: '',
        redirectTo: 'fetabsed',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
