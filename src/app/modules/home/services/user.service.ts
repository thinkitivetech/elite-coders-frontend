import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: User[] = [];

  constructor() {
  }

  updateUser(user: any) {
    
  }

  insertEmployee(user: any) {
   
  }

  deleteEmployee(id: number) {
    
  }

  populateForm(user: any) {
  }
}
