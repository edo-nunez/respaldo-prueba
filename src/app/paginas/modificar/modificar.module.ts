import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ModificarPage],
  providers: [ProductservService]
})
export class ModificarPageModule { }
