import { NgModule, NgModuleFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/user/pages/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/user',
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
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
