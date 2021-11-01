import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { FeatureReservaChurrasqueiraPageRoutingModule } from './feature-reserva-churrasqueira-routing.module';

import { FeatureReservaChurrasqueiraPage } from './feature-reserva-churrasqueira.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureReservaChurrasqueiraPage
      }
    ]),
    CalendarModule,
    FeatureReservaChurrasqueiraPageRoutingModule
  ],
  declarations: [FeatureReservaChurrasqueiraPage]
})
export class FeatureReservaChurrasqueiraPageModule {}
