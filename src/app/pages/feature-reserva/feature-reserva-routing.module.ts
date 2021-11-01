import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureReservaPage } from './feature-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureReservaPageRoutingModule {}
