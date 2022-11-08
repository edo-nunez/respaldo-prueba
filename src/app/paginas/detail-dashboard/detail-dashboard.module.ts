import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDashboardPageRoutingModule } from './detail-dashboard-routing.module';

import { DetailDashboardPage } from './detail-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDashboardPageRoutingModule
  ],
  declarations: [DetailDashboardPage]
})
export class DetailDashboardPageModule {}
