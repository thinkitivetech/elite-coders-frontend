import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';



const sharedComponents = [
  HeaderComponent,
  LoaderComponent,
  NotFoundComponent,
  FilterPipe
]
@NgModule({
  declarations: [sharedComponents,],
  imports: [
    CommonModule
  ],
  exports:[sharedComponents],
  entryComponents:[]
})
export class SharedModule { }
