import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { RoomRegisterComponent } from './room-register/room-register.component';

const routes: Routes = [
   {path : 'ChatHome', component : ChatHomeComponent}, 
  {path : 'RegsiterRoom', component : RoomRegisterComponent}, 
  { path: 'room/:id', component: ChatHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatServiceManagementRoutingModule { }
