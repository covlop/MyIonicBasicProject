import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule]
})
export class InicioPage  {

  constructor(public router: Router) {}

    navegarLugar(placeName:string){
    this.router.navigate(['/lugar'], {queryParams: {name: placeName}});
  }

}
