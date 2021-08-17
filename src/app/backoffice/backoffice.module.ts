import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { JobsComponent } from './jobs/jobs.component';
import { PacksComponent } from './packs/packs.component';
import { SettingComponent } from './setting/setting.component';
import { AppsettingComponent } from './appsetting/appsetting.component';



@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    BusinessComponent,
    JobsComponent,
    PacksComponent,
    SettingComponent,
    AppsettingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
