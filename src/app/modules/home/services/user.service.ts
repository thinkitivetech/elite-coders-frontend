import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  public userList: User[] = [];

  constructor(private api:ApiService){
  }

  updateUser(user: any) {
    
  }

  insertEmployee(user: any) {
   
  }

  deleteEmployee(id: number) {
    
  }

  populateForm(user: any) {
  }

  login(userType:string,data:any){
    return this.api.post(`http://52.6.194.120:8000/hack/auth/${userType}/login`,data)
  }

  getAuth(){
    const token = sessionStorage.getItem('auth');
    console.log("Auth token Got ==>",token)
    return token;
  }

  setAuth(token:string){
    console.log("Auth token Settled ==>",token)
    sessionStorage.setItem('auth',token);
  }
}
