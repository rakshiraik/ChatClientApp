import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserManagementService } from '../services/user-management.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: any; 
  showNameError: boolean = false;

  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private userManagementService:UserManagementService,private localStorageService:LocalStorageService) { 

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required])
    });
  }

  public OnSubmit() {  
    console.log(this.userForm.value);
    if(!this.userForm?.valid){
      this.showNameError=true;      
      return;
     }

     this.userManagementService.Login(this.userForm.value).subscribe({

      next:data=>{
        this.localStorageService.set("userContext",JSON.stringify(data));
        alert('Loged in successfully'+this.route);
        this.router.navigate(['/Chat/ChatHome'],{ relativeTo: this.route });
      },

      error:errdata=>{
        console.log(errdata);
        alert('Login Failed');
      }
      
     });
  }



  onSubmit(): void  {
    console.log(this.userForm.value);
    if(!this.userForm?.valid){
      this.showNameError=true;      
      return;
     }
  }



}
