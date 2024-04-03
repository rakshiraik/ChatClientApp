import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatMAnageServiceService {
  apiUrl: string = 'https://localhost:7135/api/Chat';
  id:string='';
  constructor(private http: HttpClient) { }


  
  public getRooms(): Observable<any> { 
    const userContext = localStorage.getItem("userContext")!; // you probably want to store it in localStorage or something
    const tokenData=JSON.parse(userContext);
    if (tokenData) {
      if (tokenData!.userId) {
        this.id=tokenData!.userId;
   
      }
    }
    return this.http.get<any[]>(
      this.apiUrl+"?id="+this.id,      
      )
  }

  public regUser(user: any): Observable<any> { 
    user.id=0;
    user.noOfPeopleAllowed=0;
    return this.http.post<any[]>(
      this.apiUrl+"/RegisterRoom",user      
      )
  }

  public getLogedUser(){

    const userContext = localStorage.getItem("userContext")!; // you probably want to store it in localStorage or something
    const tokenData=JSON.parse(userContext);
    if (tokenData) {
      if (tokenData!.userId) {
        this.id=tokenData!.userId;
   
      }
    }
    return this.id;

  }
}
