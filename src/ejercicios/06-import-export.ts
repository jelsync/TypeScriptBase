import { Producto } from "../interface";
import { calcularISV } from "./05-desestructuraion-funcion";

const carritoCompras: Producto[] = [
    {precio:1, desc: 'Pc'},
    {precio:2, desc: 'Pc2'},
];

const [total, isv] = calcularISV(carritoCompras)

console.log('Total', total);
console.log('ISV', isv);