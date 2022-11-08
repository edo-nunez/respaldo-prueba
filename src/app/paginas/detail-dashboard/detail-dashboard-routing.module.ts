import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDashboardPage } from './detail-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDashboardPageRoutingModule {}
