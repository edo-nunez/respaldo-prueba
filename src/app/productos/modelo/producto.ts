export interface Producto {
    nombre: string,
    descripcion: string,
    stock: number,
    precioVenta: number,
    foto: string,
    sku: number,
    disponibilidad: boolean,
    categoria: string,
    marca: string,
    modalidadVenta: string,
    descuento: number,
    porcDecto: number
}

export interface ProductoConID extends Producto {
    id: number;
}

export interface ProductoParcial extends Partial<Producto> { }
