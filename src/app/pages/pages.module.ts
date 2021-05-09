import { MainPageModule } from './main-page/main-page.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { DetalhesModule } from './detalhes/detalhes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, MainPageModule,DetalhesModule],
  exports: [],
})
export class PagesModule {}
