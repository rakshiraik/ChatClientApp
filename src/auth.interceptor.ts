import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './app/user-management/services/local-storage.service';
export const BYPASS_LOG = new HttpContextToken(() => false);
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userContext = localStorage.getItem("userContext")!; // you probably want to store it in localStorage or something
    const tokenData=JSON.parse(userContext);
    debugger

    if (tokenData) {

      if (!tokenData!.token) {
        
        return next.handle(req);

      }else{

      req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${tokenData!.token||''}`),
        });

      }

    }else{

      return next.handle(req);

    }


    return next.handle(req);
  }
}
