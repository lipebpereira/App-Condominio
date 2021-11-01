import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureReservaPageRoutingModule } from './feature-reserva-routing.module';

import { FeatureReservaPage } from './feature-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureReservaPageRoutingModule
  ],
  declarations: [FeatureReservaPage]
})
export class FeatureReservaPageModule {}
