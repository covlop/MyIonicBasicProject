import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SublugarPageRoutingModule } from './sublugar-routing.module';

import { SublugarPage } from './sublugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SublugarPageRoutingModule
  ]
})
export class SublugarPageModule {}
