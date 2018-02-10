import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const firebaseConfig = {
  apiKey: "AIzaSyAy56uLLf3PRLJiHXIUB-UXiYCs5QOXuIA",
  authDomain: "angular-lab-2791f.firebaseapp.com",
  databaseURL: "https://angular-lab-2791f.firebaseio.com",
  projectId: "angular-lab-2791f",
  storageBucket: "angular-lab-2791f.appspot.com",
  messagingSenderId: "875841288729"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
