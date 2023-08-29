//1-Contador Ascendente: Imprime los números del 1 al 10 en orden ascendente.

//respuesta con while
/* let num = 0;
 while (num <= 9) {
    console.log(++num);
} */

//respuesta con for
/* for (let num = 1 ;num <= 10; ++num){
    console.log(num);
} */



//2-Contador Descendente: Imprime los números del 10 al 1 en orden descendente.

// respuesta con while
/* let num = 10;
while (num > 0) {
    console.log(num);
    num--;
} */

//respuesta con for
/* for( let num = 10; num > 0; num--){
    console.log(num);
} */



//3-Suma de Números: Calcula la suma de los números del 1 al 10.

/* let num = prompt('Ingrese un numero para saber sus tabla de multiplicar')
for(let num  10; num > ){
    console.log(`${num} x ${i} = ${num*i}`);
    i++;
}
*/

let suma = prompt('Ingrese un numero para saber sus sumas del 1 al 10');

for (let i = 1; i <= 10; i++) {
    console.log("La suma de los números del 1 al 10 es:", suma);
    suma += i;
}


//4-Tabla de Multiplicar: Pedir al usuario un numero y mostrar su tabla de multiplicar.

//5-Contador Pares: Imprime los números pares del 2 al 20.

//6-Contador Impares: Imprime los números impares del 1 al 19.

//7-Contador de Dígitos: Cuenta la cantidad de dígitos en un número dado.