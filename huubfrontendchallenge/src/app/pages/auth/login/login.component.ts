import { Router } from '@angular/router';
import { LoginDTO } from './../../../model/auth/login-dto';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = "";
  passwordInputType = "password";
  inputData = new LoginDTO();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  changePasswordInputType() {
    this.passwordInputType === 'password' ? this.passwordInputType = 'text' : this.passwordInputType = 'password';
  }

  resetError() {
    this.error = "";
  }

  login() {
    if (!this.inputData.email || !this.inputData.password) {
      this.error = "Fill all the fields before before logging in";
      return;
    }

    this.authenticationService.login(this.inputData).subscribe(
      _ => {
        this.router.navigate(["product-list"]);
      },
      _ => {
        this.error = "The credentials you supplied were not correct"
      }
    )
  }


}
