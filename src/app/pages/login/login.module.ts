import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
