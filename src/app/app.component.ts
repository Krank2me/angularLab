import { Component } from '@angular/core';

import { NgForm, FormGroup, FormBuilder } from '@angular/forms'

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab-angular';

  public userForm : FormGroup;
  userItems: any;
  user;

  constructor(public afDB: AngularFireDatabase, private fb : FormBuilder) {
    this.userItems = afDB.list('users').valueChanges();
  }

  ngOnInit() {

    this.userForm = this.fb.group({
      name : [],
      hobbie : [],
      birthday : [],
      email : [],
      photo : []
    });

  }

  createUser(form : any){
    console.log(form);
    const itemsRef = this.afDB.list('users');
    itemsRef.push({
      id: this.generateUUID(),
      "name" : form.name,
      "hobbie" : form.hobbie,
      "birthday" : form.birthday,
      "email" : form.email,
      "photo" : form.photo
    });

  }

  generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };
}


