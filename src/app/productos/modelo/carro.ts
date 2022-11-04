import { ProductoConID } from "./producto";

export interface Carro {
    producto: ProductoConID,
    cantidad: number,
    total: number
}