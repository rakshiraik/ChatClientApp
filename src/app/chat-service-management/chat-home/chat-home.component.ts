import { Component, OnInit } from '@angular/core';
import { ChatMAnageServiceService } from '../Services/chat-manage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

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
      debugger 
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

   public loadRegisterRoom() {  
    this.router.navigate(['/Chat/RegsiterRoom']);
 }

}
