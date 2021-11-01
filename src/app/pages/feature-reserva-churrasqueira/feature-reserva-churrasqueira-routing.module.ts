import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureReservaChurrasqueiraPage } from './feature-reserva-churrasqueira.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureReservaChurrasqueiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureReservaChurrasqueiraPageRoutingModule {}
