import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    RegisterUserComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [     
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule
  ],exports:[
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
