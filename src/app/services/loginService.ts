import { Injectable } from '@angular/core';
import { DTOUser } from '../models/DTOUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: DTOUser[] = [
    new DTOUser('user1', 'password1'),
    new DTOUser('user2', 'password2'),
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    console.log(!!user)
    return !!user;
  }
}
