import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'detalle/:idProducto',
    loadChildren: () => import('./paginas/detalle/detalle.module').then(m => m.DetallePageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./paginas/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./paginas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
