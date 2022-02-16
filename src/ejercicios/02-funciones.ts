const sumar = (a: number, b: number): number => {
    return (a + b);
}

const multiplicar = (numero: number, otroNumero?: number, base: number = 2): number => { return numero * base }

// const resultado = multiplicar(5, 10);
interface PersonajeLOR {
    nombre: string;
    pv: number;
    hp: number;
    mostrar: () => void;
}

const curar = (personaje: PersonajeLOR, curarX: number) => {
    personaje.hp += curarX
    return personaje;
    // console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Nuevo Jelsyn',
    pv: 50,
    hp: 50,
    mostrar() {
        console.log('Puntos de vida', this.pv);
    }
}
// console.log('Puntos de Anteriores: ', nuevoPersonaje);


curar(nuevoPersonaje, 80);
nuevoPersonaje.mostrar();

// console.log('Puntos de actuales: ', resultado.mostrar());
