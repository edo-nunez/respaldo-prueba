import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgregarPage } from '../agregar/agregar.page';
import { ListaProductoComponent } from 'src/app/productos/componentes/lista-producto/lista-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [DashboardPage],
  providers: [ProductservService]
})
export class DashboardPageModule { }
