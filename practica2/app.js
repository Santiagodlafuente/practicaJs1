// Practicas #2 - Mas Ejercicios

//Ejercicio 1: Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.​

//respuesta 1 - usando if 
/*let edad = prompt('ingrese su edad');
if (edad >= 18){
      alert('Usted es mayor de edad');
}else if (edad <18 ){
      alert('Usted es menor de edad')
} */

//respuesta 2 - usando switch
/*let edad = parserInt(prompt('ingrese su edad'));
switch (true) {
    case edad >= 18:
        alert('es mayor de edad');
        break;
    case edad < 18:
        alert('es menor de edad');
        break;
} */


//Ejercicio 2: Escribe un programa que solicite al usuario dos números y muestre cuál de ellos es mayor.​

/* alert('ingrese dos numeros y un programa calculara cual es el mayor de ellos');
let num1 = prompt('ingrese el 1er numero');
let num2 = prompt('ingrese el segundo numero');

let valorMax = Math.max(num1, num2);
let valorMin = Math.min(num1, num2);
alert(valorMax + ' es mayor que ' + valorMin);  */


// Ejercicio 3: Escribe un programa que solicite al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.​

/* let num = prompt('ingrese un numero y este programa calculara si es positivo, negativo o cero')
if(num > 0){
    alert('El numero ' + num + ' es positivo');
} else if(num < 0){
    alert('El numero ' + num + ' es negativo');
} else {
    alert(' este numero es cero')
} */


// Ejercicio 4: Escribe un programa que solicite al usuario un número del 1 al 7 y muestre el día de la semana correspondiente. Si el número no está en ese rango, mostrar un mensaje de error.​

//respuesta 1 - usando condicional 
/*let numday = promt('ingrese un numero')
if(numday == 1){
    alert('hoy es lunes');
}
if(numday == 1){
    alert('hoy es marte');
}
if(numday == 1){
    alert('hoy es miercoles');
}
if(numday == 1){
    alert('hoy es jueves');
}
if(numday == 1){
    alert('hoy es viernes');
}
if(numday == 1){
    alert('hoy es sabado');
}
if(numday == 1){
    alert('hoy es domingo');
}
if(numday == 1){
    alert('hoy es lunes');
} else{
    alert('error');
} */

//Respuesta 2 - Usando Array
/* let numDay = prompt('ingresar un numero');
let daysOftheWeek = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado', 'domingo'];
alert(`hoy es ${daysOftheWeek[numDay-1]}`); */


//Ejercicio 5: Escribe un programa que solicite al usuario su calificación en un examen y muestre un mensaje indicando si ha aprobado (calificación mayor o igual a 60) o ha reprobado (calificación menor a 60).​

/* let nota = prompt('Ingrese su calificacion optenida en el examen para comprobar si aprobo (60 o mas), o reprobo (-60).')
if (nota > 100){
    alert('el numero ingresado es incorrecto')
} else if (nota < 0){
    alert('el numero ingresado es incorrecto')
} else if (nota < 60){
    alert('La calificacion de ' + nota + ' significa que esta Reprobado :( Lo siento.');
} else if (nota >= 60){
    alert('La calificacion de ' + nota + ' significa que esta Aprobado ;) Bien hecho!');
}; */


//Ejercicio 6: Escribe un programa que solicite al usuario dos números y a uno le sume 10 y al otro le reste 2.​
/* alert('Ingrese dos Numeros a continuacion y este programa le sumara 10 al 1ro y le restara 2 al segundo');
let num1 = prompt('Ingrese el 1er numero');
let num2 = prompt('Ingrese el 2do numero');
let sumaNum1 = num1 + 10;
let restaNum2 = num2 - 2;
alert(num1 + ' + 10 = ' + sumaNum1);
alert(num2 + ' - 2 = ' + restaNum2); */


