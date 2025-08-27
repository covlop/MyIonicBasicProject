import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

