import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AgregarPage],
  providers: [ProductservService]
})
export class AgregarPageModule { }
