import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SublugarPage } from './sublugar.page';

const routes: Routes = [
  {
    path: '',
    component: SublugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SublugarPageRoutingModule {}
