import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated = false;
  private authSecretKey = 'userContext';

  constructor() { 
    const userContext = localStorage.getItem("userContext")!; // you probably want to store it in localStorage or something
    const tokenData=JSON.parse(userContext);
    if (tokenData) {
      if (tokenData!.token) {
        this.isAuthenticated =true;
      }
    }
  }

  isAuthenticatedUser(): boolean {
    const userContext = localStorage.getItem("userContext")!; // you probably want to store it in localStorage or something
    const tokenData=JSON.parse(userContext);
    if (tokenData) {
      if (tokenData!.token) {
        this.isAuthenticated =true;
      }
    }
    return this.isAuthenticated;
  }

  
  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
