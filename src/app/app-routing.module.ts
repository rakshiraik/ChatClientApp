import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserManagementRoutingModule } from './user-management/user-management-routing.module';
import { RegisterUserComponent } from './user-management/register-user/register-user.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatServiceManagementRoutingModule } from './chat-service-management/chat-service-management-routing.module';

const routes: Routes = [ 
  { 
    path: '', 
    loadChildren: () => import('./chat-service-management/chat-service-management.module').then(m => m.ChatServiceManagementModule) ,
    canActivate: [AuthGuard]
  },
  { 
    path: 'User', 
    loadChildren: () => import('./user-management/user-management-routing.module').then(m => m.UserManagementRoutingModule) ,
    //canActivateChild: [AuthGuard]
  },
  { 
    path: 'Chat', 
    loadChildren: () => import('./chat-service-management/chat-service-management.module').then(m => m.ChatServiceManagementModule) ,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserManagementRoutingModule,ChatServiceManagementRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
