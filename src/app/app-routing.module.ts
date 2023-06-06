import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionModuleComponent } from './position-module/position-module.component';
import { DepartmentModuleComponent } from './department-module/department-module.component'
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginpageComponent,
  },
  {
    path: 'Position', 
    component: PositionModuleComponent,
  },
  {
    path: 'Department',
    component: DepartmentModuleComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
