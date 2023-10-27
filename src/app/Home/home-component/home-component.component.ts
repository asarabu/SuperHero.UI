import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoDto } from 'src/app/Interfaces/UserInfoDto';
import { UserResponse } from 'src/app/Interfaces/UserResponse';
import { LoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  private returnUrl: string | undefined;
  
  errorMessage: string | undefined;
 ;

  loginForm!: FormGroup; 
  showError: boolean | undefined; ;
  
  constructor(private authService: LoginService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      userPassword: new FormControl("", [Validators.required])
    })
    
  }

  loginUser = (loginFormValue: any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserInfoDto = {
      userName: login.userName,
      userPassword: login.userPassword
    }

    this.authService.loginUser(userForAuth)
    .subscribe({
      next: (res:UserResponse) => {
       localStorage.setItem("token", res.sessionInfo);
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})

  }
}

