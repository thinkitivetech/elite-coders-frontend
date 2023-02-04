import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  constructor(public snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.formInit()
    
  }

  formInit(){
    this.loginForm = new UntypedFormGroup({
      user: new FormControl('',[Validators.required]),
      pass: new FormControl('',[Validators.required])
    })
    this.loadForm = true
    console.log(this.loginForm.get('user').status)
    console.log("Valid Status =>",this.loginForm.valid)
  }

  onSubmit(){
    console.log("Value ==>",this.loginForm.value);
    if(this.loginForm.value){
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
