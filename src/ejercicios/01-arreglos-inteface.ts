// let skill: string[] = ['Correr', 'Saltar', 'Nadar'];

interface Personaje {
    name: string,
    hp: number,
    skill: string[],
    puebloNat?: string
}

const personaje: Personaje = {
    name: 'Jelsyn',
    hp: 100,
    skill: ['Correr', 'Saltar', 'Nadar']
}

personaje.puebloNat = 'Tegucigalpa'

console.table(personaje)