import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BusinessComponent } from './business/business.component';
import { JobsComponent } from './jobs/jobs.component';
import { SettingComponent } from './setting/setting.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { PacksComponent } from './packs/packs.component';


const routes:Routes = [
  //agregar mas componentes
  {
   path: 'backoffice',
   component:BackofficeComponent,
   children: [
     {path: 'home', component: HomeComponent},     //agregar components
     {path: 'users', component: UsersComponent},
     {path: 'business', component: BusinessComponent},
     {path: 'jobs', component: JobsComponent},
     {path: 'paks', component: PacksComponent},
     {path: 'setting', component: SettingComponent},
     {path: 'appsetting', component: AppsettingComponent}
   ]
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BackofficeRoutingModule { }
