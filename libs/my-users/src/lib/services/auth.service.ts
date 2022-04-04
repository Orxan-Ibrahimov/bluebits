import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiUrl = environment.API_URL + 'users';
  
  constructor(private http:HttpClient) { }

  login(email:string, passwordHash:string):Observable<User>{
   return this.http.post<User>(`${this.ApiUrl}/login`,{email,passwordHash})
  }
}

