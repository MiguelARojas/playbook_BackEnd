// Ejemplo 1 - for each para imprimir los elementos de una lista
const numbers = [1,2,3,4,5];
const completeName = ["Miguel","Angel","Rojas","Macias"];

console.log("\nEjemplo 1.- For Each")

console.log("Imprimimos el arreglo numbers")
numbers.forEach(num => console.log(num))

console.log("\nImprimimos el arreglo completeName")
completeName.forEach(num => console.log(num))

// Ejemplo 2 - For Each, Calcular la suma de un arreglo
let sum = 0;
const numbers2 = [1,2,3,4,5];
numbers2.forEach(num => sum += num)
console.log(`\nLa suma de tu arreglo es: ${sum}`)

// Ejemplo 3 - Imprimir paises en mayusculas
const countries = ['Finland', 'Denmark', 'México','Sweden','Norway']
console.log("\nElementos en mayusculas")
countries.forEach(element => console.log(element.toLocaleUpperCase()))