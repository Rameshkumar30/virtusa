import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorcoursesComponent } from './instructorcourses/instructorcourses.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AddlessonsComponent } from './addlessons/addlessons.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { InstructorcourseslistComponent } from './instructorcourseslist/instructorcourseslist.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:InstructorcoursesComponent},
  {path:"instructorcourseslist",component:InstructorcourseslistComponent},
  {path:"addcourses",component:AddcoursesComponent},
  {path:"addlessons",component:AddlessonsComponent},
  {path:"add",component:AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
