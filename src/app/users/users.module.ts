import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { USERS_SERVICE } from './services/users.token';
import { UsersRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetModule, PushModule } from '@rx-angular/template';
import { ShowfirstComponent } from './showfirst/showfirst.component';
import { ShowsecondComponent } from './showsecond/showsecond.component';
import { ShowthirdComponent } from './showthird/showthird.component';




@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    ShowfirstComponent,
    ShowsecondComponent,
    ShowthirdComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PushModule,
    LetModule
  ],
  providers : [
    {provide : USERS_SERVICE , useClass: UserService }
  ]
 
})
export class UsersModule { }
