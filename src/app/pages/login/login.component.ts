import { LoginService } from 'src/app/services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private serviceLogin: LoginService
  ) {}
  formLogin = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(): void {
    const login = this.formLogin.value;
    this.serviceLogin.login(login).subscribe(() => {
      console.log(document.cookie)
    });
  }
}
