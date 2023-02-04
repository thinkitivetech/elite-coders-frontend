import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from 'src/app/material.module';
import { GenerateTypesComponent } from './components/generate-types/generate-types.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        HomeComponent,
        GenerateTypesComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        MatIconModule
    ],
    entryComponents:[
        GenerateTypesComponent
    ]
})
export class HomeModule { }
