import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { Router } from '@angular/router';
import { RTCPeerConnection, RTCSessionDescription } from 'wrtc';
import { ChatMAnageServiceService } from '../Services/chat-manage-service.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit, AfterViewChecked {
  
  chatService = inject(ChatService);
  chatManageService = inject(ChatMAnageServiceService);
  inputMessage = "";
  messages: any[] = [];
  router = inject(Router);
  loggedInUserName = this.chatManageService.getLogedUser();
  roomName = sessionStorage.getItem("room");

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;
  constructor() { }

  ngAfterViewChecked(): void {
   // this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  sendMessage(){
    this.chatService.sendMessage(this.inputMessage)
    .then(()=>{
      this.inputMessage = '';
    }).catch((err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.chatService.messages$.subscribe(res=>{
      this.messages = res;
      console.log(this.messages)
    });

    this.chatService.connectedUsers$.subscribe(res=>{
      console.log(res);

    })
  }

  leaveChat(){
    this.chatService.leaveChat()
    .then(()=>{
      this.router.navigate(['welcome']);
      setTimeout(() => {
        location.reload();
      }, 0);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
