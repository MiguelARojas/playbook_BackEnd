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

// Ejemplo 10 - Uso de every
// Every nos ayuda a comprobar los elementos de nuestra lista, si todos cumplen nos retorna un true
const namesExplorers = ['Valente','Victor','Miguel'] 
const allNames = namesExplorers.every(name => typeof name == 'string') // comprobamos que los elementos de mi lista sean tipo string
console.log("\nLos elementos de mi lista son string (todos): " + allNames)

// Ejemplo 11 - Uso del find
// El find nos ayuda a buscar el primer elemento de nuestra lista que cumpla con lo que le indiquemos
const ages2 = [22,21,35,45,50,8,15,26]
const age = ages2.find(age => age > 25)
console.log("\nPrimer edad encontrada mayor a 25 es " + age)


// Ejemplo 12 - Uso del find en una lista de objetos
const ages3 = [
    {name:"Miguel", age:22},
    {name:"Valente", age:22},
    {name:"Angel", age:45},
    {name:"Ana", age:33},
    {name:"Carlos", age: 8}
]

const age_less_than_20 = ages3.find(person => person.age < 20)
console.log("\nPersona con menos de 20 años es: " + age_less_than_20.name + " with " + age_less_than_20.age + " years")


// Ejemplo 13 - Uso del findIndex
// EL findIndex nos retorna la posicion del primer elemento que cumpla con la validacion indicada
const explorers = ['Victor','Valente','Miguel']
const result = explorers.findIndex(name => name.length > 6) // nos retornara el primer elemento que cuente con mas de 6 caracteres
console.log("\nPersona que cuenta con mas de 6 caracteres en su nombre es: " + explorers[result] + " que se encuentra en la posicion " + result + " de nuestro arreglo") 


// Ejemplo 14 - Uso del some
// El some trabaja de la misma manera que every solo que con some mientras un elemento de nuetra lista cumpla con la validacion nos retornara true
const ages4 = [22,21,35,45,50,8,15,26]

const age_45 = ages4.some(age => age == 45)
console.log("\n¿Un elemento de nuestra lista contiene un 45? -> " + age_45) // true


// Ejemplo 15 - Uso de sort para ordenar los elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("\nLos elementos de mi lista usando sort()")
console.log(products.sort())

// Ejemplo 16 - Uso del metodo sort en una lista de objetos
const ages5 = [
    {name:"Miguel", age:22},
    {name:"Valente", age:22},
    {name:"Angel", age:45},
    {name:"Ana", age:33},
    {name:"Carlos", age: 8}
]

ages5.sort((a,b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log("\nNuestra lista de objetos ordenada es: " + ages5)
