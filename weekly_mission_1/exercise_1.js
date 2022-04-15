// Creacion de mis ejercicios
let myPhone = new Object();

// Asignando valores a mi objeto
myPhone.make = 'Xiaomi';
myPhone.model = 'Redmi Note 9pro';
myPhone.price = 7999;
myPhone.color = 'white';

console.log(myPhone)


// Declarando un objeto con variables locales y publicas
const myCase = (() => {
    // Variables de contexto local, no podemos darle uso a menos que las llamemos en const exported
    const colorCase = "Red with Black"
    const typeConnect = 'Type C'
    const charger = "Fast Charge"


    // Variable para guardar las variables locales
    const exported = {
        colorPhone: "The cellphone is white",
        chargerConnection: "The type of the charger is type C",
            // de esta manera asignamos las variables locales y podemos darles uso
            publicCharger: charger,
            publicColor: colorCase,
            publicConnect: typeConnect
    }
    // Exposición de variables locales
    return exported
})()

console.log(myCase)

