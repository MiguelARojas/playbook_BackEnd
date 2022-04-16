// main.js

// en este ejercicio veremos que podemos tener mas de dos requerie y poder llamar informacion de dos diferentes archivos

const logger1 = require('./example_2')
const logger2 = require('./example_3')

logger1('This the first informational message')
logger2.lastMessage('This is the second informational message')
