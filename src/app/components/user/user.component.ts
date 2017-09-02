import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  isEdit = false;

  constructor() {
    this.user = new User();
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
  }

  onClick() {
    this.user.name = 'Breno Nogueira';
    this.user.hobbies.push('New Hobby');
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby) {
    console.log(hobby);
    this.user.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.user.hobbies.length; i++) {
      if (this.user.hobbies[i] === hobby) {
        this.user.hobbies.splice(i, 1);
      }
    }
  }
}
