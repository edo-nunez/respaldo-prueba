import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Producto, ProductoConID, ProductoParcial } from './../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductservService {

  private URL_PRODUCTO = 'http://localhost:3000/productos';
  private paginaActual = 1;

  private productoLista = new BehaviorSubject<Array<ProductoConID>>([]);
  public listaProductos$ = this.productoLista.asObservable();
  public resultado!: ProductoConID;
  public productoAlmacenado: Array<ProductoConID> = [];

  constructor(
    private http: HttpClient
  ) { }

  public listarPrimerosElementos() {
    this.http.get<Array<ProductoConID>>(`${this.URL_PRODUCTO}?_page=1`)
      .subscribe(datos => {
        this.paginaActual = this.paginaActual + 1;
        this.productoLista.next(datos);
        console.log(this.productoLista)
      });
  }

  public obtenerMasElementos() {
    this.http.get<Array<ProductoConID>>(`${this.URL_PRODUCTO}?_page=${this.paginaActual}`)
      .pipe(
        delay(3000)
      )
      .subscribe(datos => {
        if (datos) {
          this.paginaActual = this.paginaActual + 1;
          this.productoLista.next(this.productoLista.getValue().concat(datos));
        }
      })
  }

  public obtenerProductoPorID(id: number): Observable<ProductoConID | null> {

    return this.http.get<ProductoConID | null>(`${this.URL_PRODUCTO}/${id}`);
  }

  public agregarProducto(producto: Producto) {
    return this.http.post(this.URL_PRODUCTO, producto, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  public eliminarProductoPorID(id: number): Observable<any> {
    // http://localhost:3000/productos/2 -> DELETE
    return this.http.delete(`${this.URL_PRODUCTO}/${id}`)
  }

  public editarPorID(id: number, payload: ProductoParcial): Observable<any> {
    return this.http.patch(`${this.URL_PRODUCTO}/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }


}
