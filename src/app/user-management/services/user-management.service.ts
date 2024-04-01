import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { BYPASS_LOG } from 'src/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  apiUrl: string = 'https://localhost:7072/api/Account';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,private localStorageService:LocalStorageService) {

   }

  public getUser(id: number): Observable<any> { 
       
    return this.http.get<any[]>(
      this.apiUrl+"/GetUser?id="+id,      
      )
  }


  public regUser(user: any): Observable<any> { 
    debugger
    return this.http.post<any[]>(
      this.apiUrl+"/RegisterUser",user      
      )
  }

  public Login(user: any): Observable<any> { 
    debugger
    return this.http.post<any[]>(
      this.apiUrl+"/LoginUser",user      
      )
  }

}
