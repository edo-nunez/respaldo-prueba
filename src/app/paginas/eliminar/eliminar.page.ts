import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoConID } from 'src/app/productos/modelo/producto';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  public idActiva: number = 0;
  public productoActivo!: ProductoConID;

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private apiProducto: ProductservService,
    private alerta: AlertController
  ) { }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(parametros => {
      this.idActiva = +parametros.get('idProducto') // null;
      this.apiProducto.obtenerProductoPorID(this.idActiva)
        .subscribe(datos => {
          if (datos) {
            this.productoActivo = datos;
          } else {
            this.router.navigate(['']);
          }
        })
    });
  }

  public async borrar() {
    const mensaje = await this.alerta.create({
      header: '¿Seguro quieres borrar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si, borralo',
          role: 'confirm',
          handler: () => {
            this.apiProducto.eliminarProductoPorID(this.idActiva)
              .subscribe(() => {
                this.router.navigate(['']);
              })
          }
        }
      ]
    });
    await mensaje.present();
  }

}
