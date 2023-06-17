import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InstructorcoursesComponent } from './instructorcourses/instructorcourses.component';
import { InstructorcourseslistComponent } from './instructorcourseslist/instructorcourseslist.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AddComponent } from './add/add.component';
import { AddlessonsComponent } from './addlessons/addlessons.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InstructorcoursesComponent,
    InstructorcourseslistComponent,
    AddcoursesComponent,
    AddComponent,
    AddlessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
