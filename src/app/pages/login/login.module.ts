import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [LoginComponent],
    imports:[CommonModule],
    exports: [LoginComponent]
})
export class LoginModule{}