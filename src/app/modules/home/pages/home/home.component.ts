import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenerateTypesComponent } from '../../components/generate-types/generate-types.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialog:MatDialog){

  }

  createTemplate(){
    const dialogRef = this.dialog.open(GenerateTypesComponent)
    dialogRef.afterClosed().subscribe(res=>{
        if(res && res.isConfirmed){
          console.log("Project Type :")
        }
    })
  }
}
