import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateTemplateTypes } from 'src/app/models/create-template-types.enum';

@Component({
  selector: 'app-generate-types',
  templateUrl: './generate-types.component.html',
  styleUrls: ['./generate-types.component.scss']
})
export class GenerateTypesComponent {

   generateTypes:{title:string,img:string,url:string}[] = [
    {
      // title:'Personal Information',
      title:CreateTemplateTypes.PERSONAL_INFO,
      img:'assets/personal-info.png',
      url:'/home/create/personal-info'
    },
    {
      // title:'Professional Information',
      title:CreateTemplateTypes.PROFESSIONAL_INFO,
      img:'assets/professional-details.png',
      url:'/home/create/professional-info'
    },
    {
      // title:'Technical Skills',
      title:CreateTemplateTypes.TECHNICAL_SKILLS,
      img:'assets/Technical-skilss.png',
      url:''
    },
    {
      // title:'Project Information',
      title:CreateTemplateTypes.PROJECT_INFO,
      img:'assets/project-info.png',
      url:''
    },
    {
      // title:'Project Details',
      title:CreateTemplateTypes.PROJECT_DETAILS,
      img:'assets/project-details.png',
      url:''
    }
  ]

  constructor(private dialogRef:MatDialogRef<GenerateTypesComponent>){

  }

  /**
   * @function onSelect
   * @description The function takes a value of type CreateTemplateTypes and closes the dialog with the value of the
   * selected option
   * @param {CreateTemplateTypes} value - The value of the selected option.
   */
  onSelect(value:string){
    this.dialogRef.close({isConfirmed:true,selected:value})
  }

  /**
   * @function onClose
   * @description The function closes the dialog box
   */
  onClose(){
    this.dialogRef.close()
  }
}
