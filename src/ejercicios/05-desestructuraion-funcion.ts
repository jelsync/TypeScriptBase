interface Producto {
    desc: string;
    precio: number;
}

const tablet: Producto = {
    desc: 'Nokia',
    precio: 15
}

const computadora: Producto = {
    desc: 'Dell',
    precio: 3
}

export const calcularISV = (productos: Producto[]): number[] => {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio
    })

    return [total, total * 0.15];
}

const articulos = [tablet, computadora]
const [total, isv] = calcularISV(articulos);
console.log('El total es: ', total)
console.log('ISV: ', isv)