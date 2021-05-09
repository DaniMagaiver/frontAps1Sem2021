import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetalhesComponent } from './detalhes.component';

const routes: Routes = [{ path: '', component: DetalhesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesPageRoutingModule {}
