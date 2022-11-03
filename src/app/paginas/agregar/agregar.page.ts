import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/productos/modelo/producto';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  public formProduct: FormGroup;
  public imageLoading = false;
  public base64Image = '';

  constructor(
    private formB: FormBuilder,
    private productoServ: ProductservService,
    private router: Router
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
      descuento: [false],
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

  public setPhoto(): void {
    if (this.formProduct.invalid || this.imageLoading) {
      this.formProduct.markAllAsTouched();
      return;
    }
    // Guardar
    this.productoServ.agregarProducto({
      ...this.formProduct.value,
      foto: this.base64Image
    })
      .subscribe(resultado => {
        if (resultado) {
          this.formProduct.reset();
          this.formProduct.updateValueAndValidity();
          alert('Imagen Guardada');
          this.router.navigate(['dashboard']);
        }
      })
  }

  ngOnInit() {

  }

}
