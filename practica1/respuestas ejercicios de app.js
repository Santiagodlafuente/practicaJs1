// practico1-Js
/* Problema 1: Agregar y Eliminar Elementos​
Crea un array vacío llamado frutas. Agrega tres frutas al final del array. Luego, elimina la primera fruta del array.​ */

/* let frutas = [];
frutas.push('manzana', ' pera', ' kiwi.'); 
frutas.shift()
console.log(frutas); */


/* Problema 2: Actualización de Elementos​
Tienes un array de nombres: ["Ana", "Juan", "María"]. Cambia el nombre "Juan" por "Pedro".​ */

/* 
let nombres = ['Ana', ' Juan', ' Maria'];
//respuesta 1
nombres.splice(1,1, 'Pedro');

//respuesta 2
nombres[1] = " Pedro";

console.log (nombres);  */

/* Problema 3: Reorganización de Elementos​
Tienes un array de números: [10, 20, 30, 40, 50]. Mueve el último número al principio del array utilizando los métodos pop y unshift.​ */

/*
let num = [10, 20, 30, 40, 50];

//respuesta 1
let num50 = num.pop();
num.unshift(num50);
console.log(num); */


/* Problema 4: Creación de Subarray​
Tienes un array de letras: ["a", "b", "c", "d", "e"]. Crea un nuevo array llamado subArray que contenga las letras "b", "c" y "d" utilizando el método slice. */

/*
let letras = ["a", "b", "c", "d", "e"];

//respuesta 1 
let masletras = letras.slice(1, 4);
console.log(masletras); */

/* Problema 5: Inversión de Array​
Dado un array de números: [5, 10, 15, 20, 25], crea un nuevo array que contenga los mismos elementos pero en orden inverso utilizando el método reverse.​ */

/* 
let num = [5, 10, 15, 20, 25];

// respuesta 1
num.reverse();

console.log(num); */

/* Problema 6: Extracción y Unión de Arrays​
Tienes dos arrays: numeros1 con elementos [1, 2, 3] y numeros2 con elementos [4, 5, 6]. Utiliza los métodos pop y push para mover el último elemento de numeros1 al final de numeros2, y luego muestra el array numeros2.​ */

/* 
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

// respuesta 1
num3 = num1.pop();
num2.push(num3);

console.log(num2); */

/* Problema 7: Remover Elementos con Splice​
Dado un array de frutas: ["manzana", "pera", "uva", "sandía", "banana"], utiliza el método splice para remover "uva" y "sandía" del array. Luego, muestra el array resultante. */

/* 
let frut = ['manzana', ' pera', ' uva', ' sandia', ' banana'];

//respuesta 1
frut.splice(2,2);

console.log (frut); */
