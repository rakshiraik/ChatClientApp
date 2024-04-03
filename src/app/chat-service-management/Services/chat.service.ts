import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {


  public connection: signalR.HubConnection;

  public messages$ = new BehaviorSubject<any>([]);
  public connectedUsers$ = new BehaviorSubject<string[]>([]);
  public messages: any[] = [];
  public users: string[] = [];

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7135/chatting")
      .configureLogging(signalR.LogLevel.Debug)
      .build();
    this.start();
    this.connection.on("ReceiveMessage", (user: string, message: string, messageTime: string)=>{
      this.messages = [...this.messages, {user, message, messageTime} ];
      this.messages$.next(this.messages);
    });

    this.connection.on("ConnectedUser", (users: any)=>{
      this.connectedUsers$.next(users);
    });

   }


   //start connection
  public async start(){
    try {
      await this.connection.start();
      console.log("Connection is established!")
    } catch (error) {
      console.log(error);
    }
  }

  //Join Room
  public async joinRoom(UserId: string, RoomId: string){
    return this.connection.invoke("JoinRoom", {UserId, RoomId})
  }


  // Send Messages
  public async sendMessage(message: string){
    return this.connection.invoke("SendMessage", message)
  }

  //leave
  public async leaveChat(){
    return this.connection.stop();
  }
}
