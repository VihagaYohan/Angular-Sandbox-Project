import { Component, OnInit } from '@angular/core';

// model
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabled: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2021 05:40:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        image: 'http://lorempixel.com/600/600/people/2',
        balance: 200,
        registered: new Date('01/03/2021 06:40:00'),
      },
      {
        firstName: 'David',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        image: 'http://lorempixel.com/600/600/people/3',
        balance: 300,
        registered: new Date('01/05/2021 18:00:00'),
      },
      {
        firstName: 'Christian',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        image: 'http://lorempixel.com/600/600/people/4',
        balance: 400,
        registered: new Date('01/08/2021 10:20:00'),
      },
    ];

    this.addUser({
      firstName: 'Damian',
      lastName: 'Doe',
      image: 'http://lorempixel.com/600/600/people/5',
      balance: 150,
      registered: new Date('01/02/2021 15:40:00'),
      /* age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      }, */
    });

    setTimeout(() => {
      this.loaded = true;
    }, 2000);

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enabled,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '30px',
    };
  }
}
