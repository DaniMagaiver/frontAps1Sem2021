import { PagesModule } from './../pages/pages.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, PagesModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
