import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./../agregar/agregar.module').then(m => m.AgregarPageModule)
  },
  {
    path: 'eliminar/:idProducto',
    loadChildren: () => import('./../eliminar/eliminar.module').then(m => m.EliminarPageModule)
  },
  {
    path: 'modificar/:idProducto',
    loadChildren: () => import('./../modificar/modificar.module').then(m => m.ModificarPageModule)
  },
  {
    path: 'detail/:idProducto',
    loadChildren: () => import('./../detail-dashboard/detail-dashboard.module').then(m => m.DetailDashboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule { }
