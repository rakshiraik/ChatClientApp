import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthServiceService } from './Services/auth-service.service';
import { Router } from '@angular/router';
// import { RTCPeerConnection, RTCSessionDescription } from 'wrtc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authServiceService: AuthServiceService,private router: Router){
    
  }
  isLoggedIn : boolean =false;
  ngOnInit() {

    this.isLoggedIn= this.authServiceService.isAuthenticatedUser();
  }

  isAppLoggedIn(){
    this.isLoggedIn= this.authServiceService.isAuthenticatedUser();
    return  this.isLoggedIn;

  }

  appLoggedOut(){
    this.authServiceService.logout();
    this.router.navigate(['/User/login']);
  }
}
