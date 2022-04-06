import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaleStorageService } from './locale-storage.service';
import { environment } from '@env/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor(private tokenStorage:LocaleStorageService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorage.getItem();
    const isapiUrl = request.url.startsWith(environment.API_URL);

    if(token && isapiUrl){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
