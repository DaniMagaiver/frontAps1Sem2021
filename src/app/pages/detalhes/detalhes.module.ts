import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { DetalhesPageRoutingModule } from './detalhes-page.routing.module';

@NgModule({
  declarations: [DetalhesComponent],
  imports: [DetalhesPageRoutingModule,CommonModule, SharedModule],
  exports: [DetalhesComponent],
})
export class DetalhesModule {}
