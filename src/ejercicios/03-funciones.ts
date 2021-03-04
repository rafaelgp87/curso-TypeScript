
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number {
    return a + b;
}

//const resultadoSumar = sumar(10,20);
//console.log(resultadoSumar);

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//const resultadoSumarFlecha = sumar(10,20);
//console.log(resultadoSumarFlecha);

/* Primero van los parámetros obligatorios, luego los opcionales y al último los
que tienen un valor por defecto */
function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

//const resultado = multiplicar(5,20);
//const resultado = multiplicar(5,0,10);
//console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;    
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {
    
    personaje.pv +=  curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida: ', this.pv );
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();