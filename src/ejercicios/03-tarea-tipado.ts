interface SuperHeroe {
    nombre: String;
    edad: number;
    direccion: DireccionHeroe;
    mostrarDireccion: () => string;
}

interface DireccionHeroe {
    calle: String;
    pais: String;
    ciudad: String;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
}

console.log(superHeroe.mostrarDireccion());