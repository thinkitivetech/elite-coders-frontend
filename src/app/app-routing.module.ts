import { NgModule, NgModuleFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./modules/user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
