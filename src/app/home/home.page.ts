import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomePage implements OnInit{

  constructor(public router: Router, public modalCtrl: ModalController) {}

  async ngOnInit(){
    console.log('Abriendo modal de login');
    const modal=await this.modalCtrl.create({
      component: LoginPage, 
      backdropDismiss: false
    });
    await modal.present();
  }

    navegarLugar(){
    this.router.navigate(['/lugar']);
  }
}
