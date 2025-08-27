import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Import the functions you need from the SDKs you need
import {environment} from '../environments/environment';
import {LugaresService} from './services/lugares.service';
import {AuthService} from './services/auth.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            
            ],
  providers: [{ provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy}, 
                LugaresService, AuthService,
                provideAuth(() => getAuth()),
                provideFirebaseApp(() => initializeApp(environment.firebase)),
                provideDatabase(()=> getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule {
 
   constructor(){
    }

}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional;
