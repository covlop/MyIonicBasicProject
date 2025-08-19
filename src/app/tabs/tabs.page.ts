import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { PerfilPage } from '../perfil/perfil.page';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
   imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PerfilPage
  ],

})
export class TabsPage implements OnInit {
  
  constructor(public router: RouterModule) { }

  ngOnInit() {
  }

}
