import { LoginService } from 'src/app/services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private serviceLogin: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formLogin = this.builder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });
  loginError = '';

  login(): void {
    const login = this.formLogin.value;
    this.serviceLogin.login(login).subscribe((res)=>{
      console.log("Res",res)
    });
    this.router.navigate(['..', 'chat'], {relativeTo: this.route})
  }

  get isValidEmail(){
    const fieldEmail = this.formLogin.controls['email'];
    return fieldEmail.pristine || fieldEmail.valid;
  }

  get isValidPassword(){
    const fieldPassword = this.formLogin.controls['password'];
    return fieldPassword.pristine || fieldPassword.valid;
  }
}
