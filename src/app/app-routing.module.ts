import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BackofficeRoutingModule } from './backoffice/backoffice-routing.module';

const routes:Routes = [
     //agregar mas componentes
  {path:'', redirectTo: '/home', pathMatch:'full',}        
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    BackofficeRoutingModule
  ]
})
export class AppRoutingModule { }