import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechnicalSkillsFormComponent } from './pages/technical-skills-form/technical-skills-form.component';



@NgModule({
    declarations: [
        HomeComponent,
        TechnicalSkillsFormComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
