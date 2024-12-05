import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ies-registro-de-clases","appId":"1:187514014105:web:fcb0d749b263bdebb36b08","storageBucket":"ies-registro-de-clases.firebasestorage.app","apiKey":"AIzaSyBjeBV35yQzFLBl14te-u3cj4L-QBylRLU","authDomain":"ies-registro-de-clases.firebaseapp.com","messagingSenderId":"187514014105","measurementId":"G-3DC1N5TG2P"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
