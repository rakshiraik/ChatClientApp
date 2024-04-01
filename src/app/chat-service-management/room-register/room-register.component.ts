import { Component, OnInit } from '@angular/core';
import { ChatMAnageServiceService } from '../Services/chat-manage-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-register',
  templateUrl: './room-register.component.html',
  styleUrls: ['./room-register.component.css']
})
export class RoomRegisterComponent implements OnInit {

  roomForm: any; 
  showNameError: boolean = false;
  constructor(private fb: FormBuilder,private router: Router,private chatMAnageServiceService:ChatMAnageServiceService) { }

  ngOnInit(): void {

    this.roomForm = this.fb.group({
      roomName:new FormControl('',[Validators.required]),
    });

  }

  public save() {  
    debugger
    console.log(this.roomForm.value);
    if(!this.roomForm?.valid){
      
      this.showNameError=true;      
      return;
     }

     this.chatMAnageServiceService.regUser(this.roomForm.value).subscribe({

      next:data=>{
       // this.localStorageService.set("userContext",JSON.stringify(data));
        this.router.navigate(['/Chat/ChatHome']);
      },

      error:errdata=>{
        console.log(errdata);
      }
      
     });
  }

}
