import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateTemplateTypes } from 'src/app/models/create-template-types.enum';
import { ProfessionalSummaryFormComponent } from '../../pages/professional-summary-form/professional-summary-form.component';
import { TechnicalSkillsFormComponent } from '../../pages/technical-skills-form/technical-skills-form.component';
import { UserFormComponent } from '../../pages/user-form/user-form.component';
import { ProjectSummaryFormComponent } from '../../pages/project-summary-form/project-summary-form.component';

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
      url:'/home/create/technical-skills'
    },
    {
      // title:'Project Details',
      title:CreateTemplateTypes.PROJECT_DETAILS,
      img:'assets/project-details.png',
      url:'/home/create/project-info'
    }
  ]

  constructor(private dialogRef:MatDialogRef<GenerateTypesComponent>, private dialog:MatDialog){

  }

  /**
   * @function onSelect
   * @description The function takes a value of type CreateTemplateTypes and closes the dialog with the value of the
   * selected option
   * @param {CreateTemplateTypes} value - The value of the selected option.
   */
  onSelect(value:string){
    if(value){
      let component;
      if(value===CreateTemplateTypes.PERSONAL_INFO){
        component = UserFormComponent
      }
      else if(value===CreateTemplateTypes.PROFESSIONAL_INFO){
        component = ProfessionalSummaryFormComponent
      }
      else if(value===CreateTemplateTypes.TECHNICAL_SKILLS){
        component = TechnicalSkillsFormComponent
      }
      else if(value===CreateTemplateTypes.PROJECT_DETAILS){
        component = ProjectSummaryFormComponent
      }
      const dialogRef = this.dialog.open(component);
      dialogRef.afterClosed().subscribe(res=>{
        if(res){
          this.dialog.open(GenerateTypesComponent);
          this.dialogRef.close({isConfirmed:true,selected:value});
        }
        
      })
      
    }
    
  }

  /**
   * @function onClose
   * @description The function closes the dialog box
   */
  onClose(){
    this.dialogRef.close()
  }
}
