import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/productos/modelo/carro';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';
import { User, UserConID } from '../auth/modelo/user';
import { LoginService } from '../auth/servicios/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public carro: Array<Carro> = [];
  public user!: User;

  constructor(
    private carrito: CarritoService,
    private userLog: LoginService
  ) {
    this.carro = this.carrito.carro;
    this.user = this.userLog.getUser();


  }



  get carritoCompras() {
    return this.carrito.carro;
  }

  ngOnInit() {

  }

}
