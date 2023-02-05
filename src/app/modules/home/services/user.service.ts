import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { ApiBaseUrl } from 'src/app/utils/constants';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  public userList: User[] = [];

  constructor(private api:ApiService,private router:Router,private snackbar:MatSnackBar){
  }

  login(userType:string,data:any){
    return this.api.post(`${ApiBaseUrl}/hack/auth/${userType}/login`,data).pipe(map(res=>{
      this.setLocalData('user',res['data']);
      return res
    }))
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/user'])
    this.api.openSnackbar("Logged Out Sucessfully.")
  }

  getUserById(id:string){
    return this.api.get(`${ApiBaseUrl}/employee/getById/${id}`)
  }

  updateUser(user: any) {
    
  }

  createUser(user: any) {
   return this.api.post(`${ApiBaseUrl}/employee/create`,user)
  }



  deleteUser(id: number) {
    
  }

  populateForm(user: any) {
  }

  setLocalData(key:any,data:any){
    localStorage.setItem(key,JSON.stringify(data))
  }

  getLocalData(key){
    return JSON.parse(localStorage.getItem(key));
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
