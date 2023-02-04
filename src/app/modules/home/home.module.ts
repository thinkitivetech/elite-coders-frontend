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

@NgModule({
    declarations: [
        HomeComponent,
        GenerateTypesComponent,
        CreateTemplateComponent
    ],
    imports: [
    
    CommonModule,
        HomeRoutingModule,
        MaterialModule,
        MatIconModule
    ],
    entryComponents:[
        GenerateTypesComponent
    ],
    providers:[
        {provide:MatDialogRef,useValue:{}}
    ]
})
export class HomeModule { }
