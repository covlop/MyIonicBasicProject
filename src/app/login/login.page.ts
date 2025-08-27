import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ModalController} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class LoginPage implements OnInit {

  constructor(public modalCtrl: ModalController,
              public authService: AuthService
  ){}

  async ngOnInit() {
    try{
       const user: User | null = await this.authService.handleRedirectResult();
       if(user){
          alert('Logueado con exito');
          localStorage.setItem('loginData', JSON.stringify(user));
          this.modalCtrl.dismiss();
       }
    }catch(error){
      console.error('Error en login', error);
    }
  }

  loginFacebook(){
    this.authService.loginWithFacebookRedirect();
  }

  cancelar(){
    console.log("Cancelando");
    this.modalCtrl.dismiss();
  }

}
