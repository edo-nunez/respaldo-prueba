import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  public formProduct: FormGroup;
  public imageLoading = false;
  public base64Image = '';
  public activeId = 0;


  constructor(
    private formB: FormBuilder,
    private productoServ: ProductservService,
    private router: Router,
    private routeAct: ActivatedRoute
  ) {
    this.formProduct = this.formB.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      stock: [0, [Validators.required, Validators.min(1)]],
      precioVenta: [0, [Validators.required, Validators.min(1)]],
      foto: ['', Validators.required],
      sku: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      disponibilidad: [true],
      categoria: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      marca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      modalidadVenta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      descuento: [[Validators.required]],
      porcDecto: [0, Validators.required]
    })
  }

  public field(control: string) {
    return this.formProduct.get(control);
  }
  public wasTouched(control: string) {
    return this.formProduct.get(control).touched;
  }
  public isDirty(control: string) {
    return this.formProduct.get(control).dirty;
  }

  public cargarFoto(e: Event) {
    this.imageLoading = true;
    const elemento = e.target as HTMLInputElement;
    const archivo = elemento.files[0];
    console.log(archivo);
    // Creando la imagen a base 64
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      this.imageLoading = false;
      console.log('Carga terminad a');
      // console.log(reader.result);
      this.base64Image = reader.result as string;
    }
  }

  ngOnInit() {
    this.routeAct.params.subscribe(parametros => {
      this.activeId = parametros.idProducto;
      this.productoServ.obtenerProductoPorID(this.activeId).subscribe(
        producto => {
          if (producto) {
            this.base64Image = producto.foto;
            this.formProduct.setValue({
              ...producto
            });
            this.formProduct.updateValueAndValidity();
          }
          else {
            this.router.navigate(['']);
          }
        }
      )
    })
  }

  public editar() {
    if (this.formProduct.invalid || this.imageLoading) {
      this.formProduct.markAllAsTouched;
      return;
    }
    this.productoServ.editarPorID(this.activeId, {
      ...this.formProduct.value,
      foto: this.base64Image
    }).subscribe(datos => {
      if (datos) {
        alert('Producto modificado')
        this.router.navigate(['dashboard'])
      }
    })
  }

}
