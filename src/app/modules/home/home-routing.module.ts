import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionalSummaryFormComponent } from './pages/professional-summary-form/professional-summary-form.component';
import { TechnicalSkillsFormComponent } from './pages/technical-skills-form/technical-skills-form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { ProjectSummaryFormComponent } from './pages/project-summary-form/project-summary-form.component';
import { GenerateCvComponent } from './pages/generate-cv/generate-cv.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'dash',
    pathMatch:'full',
  },
      {
        path:'dash',
        component:HomeComponent,
      },
      {
        path:'create',
        component:CreateTemplateComponent,
        children:[
          {
            path:'',
            redirectTo:'personal-info',
            pathMatch:'full',
          },
          {
            path:'personal-info',
            component:UserFormComponent
          },
          {
            path:'professional-info',
            component:ProfessionalSummaryFormComponent
          },
          {
            path:'technical-skills',
            component:TechnicalSkillsFormComponent
          },{
            path:'project-info',
            component:ProjectSummaryFormComponent
          }
        ]
      },
      {
        path:'gen-cv',
        component:GenerateCvComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
