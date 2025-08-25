import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Import the functions you need from the SDKs you need
import { AngularFireModule } from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {LugaresService} from './services/lugares.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
           AngularFireModule.initializeApp(environment.firebase)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, LugaresService],
  bootstrap: [AppComponent],
})
export class AppModule {}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8t6FY83tmbopMGcDq56309ZDnIhZO7sg",
  authDomain: "ionicproject-a2da0.firebaseapp.com",
  projectId: "ionicproject-a2da0",
  storageBucket: "ionicproject-a2da0.firebasestorage.app",
  messagingSenderId: "1040055456350",
  appId: "1:1040055456350:web:e9088e037945f14e52dacf",
  measurementId: "G-DE26C2FST4"
};
