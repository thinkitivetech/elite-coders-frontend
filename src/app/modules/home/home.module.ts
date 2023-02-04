import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from 'src/app/material.module';
import { GenerateTypesComponent } from './components/generate-types/generate-types.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TechnicalSkillsFormComponent } from './pages/technical-skills-form/technical-skills-form.component';
import { ProjectSummaryFormComponent } from './pages/project-summary-form/project-summary-form.component';
import { CommonImportsModule } from 'src/app/common-imports.module';



@NgModule({
    declarations: [
        HomeComponent,
        GenerateTypesComponent,
        CreateTemplateComponent,
        TechnicalSkillsFormComponent,
        ProjectSummaryFormComponent,
    ],
    imports: [
        CommonModule,   
        HomeRoutingModule,
        MaterialModule,
        MatIconModule,
        CommonImportsModule
    ],
    entryComponents:[
        GenerateTypesComponent
    ],
    providers:[
        {provide:MatDialogRef,useValue:{}}
    ]
})
export class HomeModule { }
