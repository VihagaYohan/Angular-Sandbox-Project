import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'

import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  data:Observable<any>;

  constructor() {
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
  }

 /*  getUsers():User[]{
    return this.users;
  } */
  getUsers():Observable<User[]>{
    return of(this.users)
  }

  addUser(user:User){
    this.users.unshift(user)
  }
}
