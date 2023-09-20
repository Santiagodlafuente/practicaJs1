/* Calculadora Simple: Crea funciones para realizar operaciones básicas de una calculadora, como suma, resta, multiplicación y división. Puedes pedir al usuario que ingrese dos números y la operación deseada.​*/

// resultado 1
/* let operacion = 'division'; //prompt('ingresa el tipo de operacion que desea hacer escrita en nombre');
let num1 =  2;//parseInt(prompt('ingrese 1er num'));
let num2 =  6;//parseInt(prompt('Ingrese 2do num'));
function calculadora(operacion, primerNum, segundoNum) {
    // hacemos la funcion con las propiedades para que pase todas las caracteres a minusculas, por si el usuario escribe en min o may, y tambien otra para que elimine todos los espacios de por medio.
    switch (operacion.toLocaleLowerCase().trim()) {
        case 'multiplicacion':
            return console.log(`El resultado de ${num1} * ${num2} es ${primerNum * segundoNum}`);
        case 'division':
            return console.log(`El resultado de ${num1} / ${num2} es ${primerNum / segundoNum}`);
        case 'suma':
            return console.log(`El resultado de ${num1} + ${num2} es ${primerNum + segundoNum}`);
        case 'resta':
            return console.log(`El resultado de ${num1} - ${num2} es ${primerNum - segundoNum}`);
    };
}; 
// llamar a la funcion
calculadora(operacion, num1, num2);  */


/* Contador de Vocales: Diseña una función que cuente la cantidad de vocales en una cadena de texto. Puedes considerar letras mayúsculas y minúsculas.​ */

//respuesta 1
/* //let oracion = 'hola como estas soy santiago'; //prompt('ingrese un texto para saber cuantas vocales tiene');

function cuentaVocales (text) {

    let letras = text.split(''); //a la caja oracion la dividimos en caracter uno por uno con el metodo split y la guardamos en la caja letras
    let counter = 0; // creamos un caja contador q tiene 0 cantidades

    for (let i = 0; i < letras.length; i++){
        switch (letras[i]) {
            case 'a':
                counter++;
                break;
            case 'e':
                counter++;
                break;
            case 'i':
                counter++;
                break;
            case 'o':
                counter++;
                break;
            case 'u':
                counter++;
                break;
        };
    };
    return counter;
};
console.log(cuentaVocales('soy santi')); */


// Respuesta 2
/* let texto = 'hola soy santiago'; //prompt('ingrese un texto para saber cuantas vocales tiene');

function cuentaVocales (text) {

    let letras = texto.split('');
    let counterA = 0;
    let counterE = 0;
    let counterI = 0;
    let counterO = 0;
    let counterU = 0;

    for (let i = 0; i < letras.length; i++){
        switch (letras[i]) {
            case 'a':
                counterA++;
                break;
            case 'e':
                counterE++;
                break;
            case 'i':
                counterI++;
                break;
            case 'o':
                counterO++;
                break;
            case 'u':
                counterU++;
                break;
        };
    };
    return (`a=${counterA}, e=${counterE}, i=${counterI}, o=${counterO}, u=${counterU}`);
};
console.log(cuentaVocales(''));
 */
 

/* Convertidor de Temperatura: Escribe funciones para convertir entre diferentes escalas de temperatura, como Celsius, Fahrenheit y Kelvin.​ */



/* Suma de Números en un Rango: Diseña una función que calcule la suma de todos los números en un rango dado.​ */



/* Contador de Palabras: Escribe una función que cuente la cantidad de palabras en una cadena de texto. */