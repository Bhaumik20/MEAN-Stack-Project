import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'
  //}
)
export class UserService {
  
  private src = new BehaviorSubject(false);
  isAdmin = this.src.asObservable();
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    role:'user'
  };

  selectedAdmin:User={
    fullName: '',
    email: '',
    password: '',
    role:'admin'
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //http methods
  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user,this.noAuthHeader);

  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(environment.apiBaseUrl+'/list',this.noAuthHeader);
  }

  deleteUser(user:User){
    return this.http.delete(environment.apiBaseUrl+ '/delete/'+user.email, this.noAuthHeader);
  }

  updateUser(user:User){
    return this.http.put(environment.apiBaseUrl + '/update', user,this.noAuthHeader);
  }

  postAdmin(user:User){
    return this.http.post(environment.apiBaseUrl + '/register', user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  

  //helper methods
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }



  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  change(flag:boolean){
    this.src.next(flag);
  }
}
