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


// Ejemplo 4 - Uso del map para recorrer los elementos de una lista y crear una nueva
const numbers3 = [1,2,3,4,5]
const numersSquare =  numbers3.map(function(num){ return num ** 2})
console.log("\nElementos de mi lista al cuadrado")
console.log(numersSquare)

// Ejemplo 5 - Uso del map para convertir los elementos en mayusculas
const name = ['Miguel','Angel','Rojas','Macias']
const nameMayus = name.map(fullName => fullName.toUpperCase())
console.log("\nElementos de mi lista en mayusculas usando map")
console.log(nameMayus)


// Ejemplo 6 - Convertir un rango de mis elementos en mayusculas
const countries2 = ['Finland', 'Denmark', 'México','Sweden','Norway']
const countriesUpper = countries2.map(country => country.toUpperCase().slice(0, 3)) // el metodo slice obtiene la longitud de nuestro string
console.log("\nElementos de mi lista con las primeras 3 letras en mayuscula")
console.log(countriesUpper)

// Ejemplo 7 - Uso del filter
const namePets = ['Daxter','Taquito','Ginny','Dory','Ary','Venus']
const namesPetsFilter = namePets.filter(pets => pets.includes('y')) // indicamos que queremos que nos filtre los nombres que tengan una y

console.log("\nElementos de mi lista que incluyan una Y")
console.log(namesPetsFilter)

const namesEndsByry = namePets.filter(pets => pets.endsWith('ry'))
console.log("\nElementos de mi lista que terminen en RY")
console.log(namesEndsByry)


// Ejemplo 8 - Filtrar una lista por condicional
const ages = [
    {name:"Miguel", age:22},
    {name:"Valente", age:22},
    {name:"Angel", age:45},
    {name:"Ana", age:33},
    {name:"Carlos", age: 8}
]

const agesFilter = ages.filter(agePerson => agePerson.age < 35) // asignamos que nos filtre la informacion que tenga de edad menos de 35
console.log("\nElementos de mi lista con edad menor a 35")
console.log(agesFilter)

// Ejemplo 9 - Uso del reduce
const numbers4 = [1,2,3,4,5]
const numbersReduce = numbers4.reduce((acc, element) => acc + element, 0)
console.log("\nElementos de mi lista usando reduce para hacer la suma de mi lista")
console.log(numbersReduce)