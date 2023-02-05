import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GenerateTypesComponent } from '../../components/generate-types/generate-types.component';
import { UserService } from 'src/app/modules/home/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:any;
  constructor(private dialog:MatDialog,private router:Router, private userService:UserService){
  }

  createTemplate(){
    const dialogRef = this.dialog.open(GenerateTypesComponent)
    dialogRef.afterClosed().subscribe(res=>{
        if(res && res.isConfirmed){
          console.log("Project Type :")
        }
    })
  }

  generateCv(){
    this.router.navigate(['home/gen-cv'])
  }

  logout(){
    this.userService.logOut();
  }
}
