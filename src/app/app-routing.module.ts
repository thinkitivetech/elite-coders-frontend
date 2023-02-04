import { NgModule, NgModuleFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'user',
    loadChildren:()=> import('./modules/user/user.module').then(mod=>mod.UserModule)
  },{
    path:'home',
    loadChildren:()=> import('./modules/home/home.module').then(mod=>mod.HomeModule)
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
