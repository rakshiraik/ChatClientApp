import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatServiceManagementRoutingModule } from './chat-service-management-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { RoomRegisterComponent } from './room-register/room-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomPageComponent } from './room-page/room-page.component';


@NgModule({
  declarations: [
    ChatHomeComponent,
    RoomRegisterComponent,
    RoomPageComponent
  ],
  imports: [
    CommonModule,
    ChatServiceManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[
    ChatServiceManagementRoutingModule,
    FormsModule
  ]
})
export class ChatServiceManagementModule { }
