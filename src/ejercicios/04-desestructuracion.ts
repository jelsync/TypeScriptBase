interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: String;
    detalles: Detalles;
}

interface Detalles {
    autor: String;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 15,
    cancion: '15 años',
    detalles: {
        autor: 'Los angeles azules',
        anio: 2015
    }
}
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual', volumen);
// console.log('El segundo actual', segundo);
// console.log('El cancion actual', cancion);
// console.log('El autor actual', autor);

const dbz: string[] = ['Goku', 'Trunsk', 'Gohan'];

const [, , p1] = dbz;

console.log(p1);