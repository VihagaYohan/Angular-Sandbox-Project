import { Component, OnInit } from '@angular/core';

// model
import { User } from '../../Models/User';

// services
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: undefined,
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: User[];
  showUserForm: boolean = true;
  showExtended: boolean = true;
  loaded: boolean = false;
  enabled: boolean = false;
  currentClasses = {};
  currentStyles = {};

  constructor(private dataService: DataService) {
    // this.users = dataService.getUsers();
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

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
        hide: true,
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
        hide: true,
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
        hide: true,
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
        hide: true,
      },
    ];

    this.addUser();

    setTimeout(() => {
      this.loaded = true;
    }, 2000);

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  /* addUser(user: User) {
    this.users.push(user);
  } */

  addUser() {
    this.user.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA',
    };
    this.user.isActive = true;
    this.user.registered = new Date();

    this.dataService.addUser(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: undefined,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
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

  fireEvent(e: Event) {
    console.log(e);
  }

  toggleUser(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e: Event) {
    console.log(e);
    e.preventDefault(); // prevent defaut submit behavior (reloading web page)
  }
}
