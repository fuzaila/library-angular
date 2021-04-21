import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  adminVerify(admin:any)   
  {
    return this.http.post<any>("http://localhost:3000/admin", admin)
  }

  userVerify(user:any)   
  {
    return this.http.post<any>("http://localhost:3000/user", user)
  }

  constructor(private http:HttpClient) { }

  adminlogged()
  {
      return !!localStorage.getItem('token');
  }

  userlogged()
  {
    return !!localStorage.getItem('usertoken');
  }

  getToken()
  {
    localStorage.getItem('token')
  }

  getuserToken()
  {
    localStorage.getItem('usertoken');
  }

}

