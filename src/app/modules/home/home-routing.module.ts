import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionalSummaryFormComponent } from './pages/professional-summary-form/professional-summary-form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

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
        ]
      }
      
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
