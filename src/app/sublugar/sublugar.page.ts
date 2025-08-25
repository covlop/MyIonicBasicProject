import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sublugar',
  templateUrl: './sublugar.page.html',
  styleUrls: ['./sublugar.page.scss'],
  imports: [
    CommonModule,
    IonicModule 
  ],
})
export class SublugarPage  {

  constructor(private router: Router) { }

     navigateSubplace(){
     this.router.navigate(['/subplace']);
  }

     navigateHome(){
     this.router.navigate(['/home']);
  }
  

}
