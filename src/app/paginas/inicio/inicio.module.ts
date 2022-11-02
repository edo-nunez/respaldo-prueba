import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ListaProductoComponent } from 'src/app/productos/componentes/lista-producto/lista-producto.component';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';
import { HttpClientModule } from '@angular/common/http';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';
import { CarritoComponent } from 'src/app/componentes/carrito/carrito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InicioPage, ListaProductoComponent, CarritoComponent],
  providers: [ProductservService, CarritoService]
})
export class InicioPageModule { }
