import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserTypes } from 'src/app/models/userTypes.enum';
import { UserService } from 'src/app/modules/home/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:UntypedFormGroup;
  loadForm:boolean = false;
  admin:{user:string,pass:string} = {
    user:'admin@thinkitive.com',
    pass:'Pass@123'
  }
  constructor(public snackbar:MatSnackBar,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.formInit()
    
  }

  formInit(){
    this.loginForm = new UntypedFormGroup({
      user: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
    this.loadForm = true
    console.log(this.loginForm.get('user').status)
    console.log("Valid Status =>",this.loginForm.valid)
  }

  onSubmit(){
    if(this.loginForm.value){
      this.userService.login(UserTypes.ADMIN,this.loginForm.value).subscribe(res=>{
        console.log("Login Response ==>",res)
      })
      this.loginForm.reset();
      this.openSnackbar("Logged In Sucessfully");
      this.router.navigate(['/home']);
    }
    else{
      this.openSnackbar("Please check your login credentials");
    }
  }

  openSnackbar(msg:any){
    this.snackbar.open(msg,'',{duration:2000})
  }
}
