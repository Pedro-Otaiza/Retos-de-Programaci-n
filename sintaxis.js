/*  ------------------------------ EJERCICIO -----------------------------------------------------------------------------------
1- Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado.
2- Representa las diferentes sintaxis que existen de crear comentarios en el lenguaje(en una línea, varias...).
3- Crea una variable(y una constante si el lenguaje lo soporta).
4- Crea variables representando todos los tipos de datos primitivos del lenguaje(cadenas de texto, enteros, booleanos...).
5- Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 --------------------------------------------------------------------------------------------------------------------------------
*/


/* No es el sitio oficial pero es un gran sitio para obtener la documentación de javascript https://developer.mozilla.org/es/docs/Web/JavaScript */

// Este es un comentario de una linea.

/*
Este es un comentario de varias lineas
*/

// ------- VARIABLES --------------------
let myVar = "JavaScript"; //Variable let para asignar valor a la variable.
const myConst = "Hello "; //Constante con el valor de Pi en JavaScript.

// ------- DATOS PRIMITIVOS -------------
let myString = "Cadena de Texto";
let myNumber = 42;
let myBoolean = true;
let nullValue = null;
let undefinedValue = undefined;
let NaNvalue = NaN;
let myBigNumber = bigInt("1234567890123454756564968684"); //Se utiliza cuando los números enteros son cantidades muy grandes.
let mySymbol = Symbol('my symbol'); //se utilizan a menudo para añadir claves de propiedades únicas a un objeto que no sean iguales a las claves que cualquier otro código pueda añadir al objeto.

// Imprimir en pantalla el texto.
console.log(myConst + myVar);