import { Component, OnInit, inject } from '@angular/core';
import { ChatMAnageServiceService } from '../Services/chat-manage-service.service';
import { Router } from '@angular/router';
import { ChatService } from '../Services/chat.service';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {
  chatService = inject(ChatService);
  isRoomFull:boolean=false;
  objectList: any[] = [];
  constructor(private chatMAnageServiceService:ChatMAnageServiceService,private router: Router) {
    console.log('from chat');
    this.getRooms()
   }

  ngOnInit(): void {

    console.log('from chat init');
  }


    public getRooms() { 
      this.chatMAnageServiceService.getRooms().subscribe({
  
       next:data=>{       
         
         this.objectList=data;
         console.log(this.objectList);
         
       },
       error:errdata=>{
           console.log(errdata);
       }
       
      });
   }
   joinRoom1(event: Event, roomName: string, roomId: string) {
    debugger
    event.preventDefault(); // Prevent form submission
  
    // Your logic to join the room goes here
  }
   joinRoom(roomName: string, roomId: string) {
debugger
    //sessionStorage.setItem("user", user);
    //sessionStorage.setItem("room", room);
    var userid=this.chatMAnageServiceService.getLogedUser();
    this.chatService.joinRoom(userid,roomId.toString())
    .then(()=>{
      this.router.navigate(['Chat/room/{{ roomId }}']);
    }).catch((err)=>{
      console.log(err);
    })
    // Handle form submission logic here, including roomName and roomId
  }


   public loadRegisterRoom() {  
    this.router.navigate(['/Chat/RegsiterRoom']);
 }

}
