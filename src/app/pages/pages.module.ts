import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, LoginModule],
  exports: [],
})
export class PagesModule {}
