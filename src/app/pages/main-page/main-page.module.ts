import { SharedModule } from './../../shared/shared.module';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { MainPageRoutingModule } from './main-page.routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [MainPageRoutingModule, SharedModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
