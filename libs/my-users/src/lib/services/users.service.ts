import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  ApiUrl = environment.API_URL + 'users';

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.ApiUrl);
  }

  getUsersCount():Observable<{userCount:number}>{
    return this.http.get<{userCount:number}>(`${this.ApiUrl}/get/count`);
  }

  getUserById(userId:string):Observable<User>{
    return this.http.get<User>(`${this.ApiUrl}/${userId}`);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.ApiUrl,user);
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.ApiUrl}/${user.id}`,user);
  }

  RemoveUser(userId:string):Observable<User>{
    return this.http.delete<User>(`${this.ApiUrl}/${userId}`);
  }
}
