import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { UserManagementService } from '../services/user-management.service';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm: any; 
  showNameError: boolean = false;

  constructor(private router: Router,private fb: FormBuilder,private userManagementService:UserManagementService,private localStorageService:LocalStorageService) { 

  }

  ngOnInit(): void {
    debugger
    console.log("Helloo");
    this.userForm = this.fb.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirm: new FormControl(null,[Validators.required])
    }, {validators: this.validateAreEqual});
  }

  public getUser() {  
     this.userManagementService.getUser(1).subscribe({

      next:data=>{       
        alert(data);
      },
      error:errdata=>{
          console.log(errdata);
      }
      
     });
  }


  public save() {  
    debugger
    console.log(this.userForm.value);
    if(!this.userForm?.valid){
      console.log(this.getAllFormErrors()); 
      this.showNameError=true;      
      return;
     }

     this.userManagementService.regUser(this.userForm.value).subscribe({

      next:data=>{
        this.localStorageService.set("userContext",JSON.stringify(data));
        this.router.navigate(['/Chat/ChatHome']);
      },

      error:errdata=>{
        console.log(errdata);
      }
      
     });
  }

  public validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirm ? null : { notSame: true };
  }

  onSubmit(): void  {
    debugger
    console.log(this.userForm.value);
    if(!this.userForm?.valid){
      this.showNameError=true;      
      return;
     }
  }

  getAllFormErrors(): { [key: string]: any } {
    const formErrors: { [key: string]: any } = {};
    Object.keys(this.userForm.controls).forEach(key => {
      const controlErrors = this.userForm.get(key)?.errors;
      if (controlErrors) {
        formErrors[key] = controlErrors;
      }
    });
    return formErrors;
  }
  
}
