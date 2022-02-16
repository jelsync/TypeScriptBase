class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string,
    ) { }
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) { 
        super(nombreReal, 'NY');
    }
}

const ironman = new Heroe('Iroman', 27, 'Tony');

console.log(ironman)