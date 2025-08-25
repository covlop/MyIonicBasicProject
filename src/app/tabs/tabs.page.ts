import { Component, OnInit } from '@angular/core';
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
    RouterModule
  ],

})
export class TabsPage implements OnInit {
  
  constructor(public router: RouterModule) { }

  ngOnInit() {
  }

}
