interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Jelsyn'
}

const pasajero2: Pasajero = {
    nombre: 'Lily',
    hijos: ['Hijo 1', 'Hijo 2']
}

const imprimirHijos = (pasajero: Pasajero) => {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
 }

 imprimirHijos(pasajero1)