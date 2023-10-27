import { UserInfoDto } from './../Interfaces/UserInfoDto';
import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../Interfaces/UserResponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
  })

  export class LoginService{
    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers: Headers) {
      headers.append('Authorization', 'Bearer ' +
        btoa('username:password')); 
    }

    public loginUser(body: UserInfoDto) :  Observable<UserResponse>  {
      return this.http.post<UserResponse>(`${environment.loginUrl}`, body);
    }

  }