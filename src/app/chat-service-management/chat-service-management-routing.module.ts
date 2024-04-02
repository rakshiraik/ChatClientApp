import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { RoomRegisterComponent } from './room-register/room-register.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoomPageComponent } from './room-page/room-page.component';

const routes: Routes = [
  {path : '', component : ChatHomeComponent, canActivate: [AuthGuard]}, 
   {path : 'ChatHome', component : ChatHomeComponent}, 
  {path : 'RegsiterRoom', component : RoomRegisterComponent}, 
  { path: 'room/:id', component: RoomPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatServiceManagementRoutingModule { }
