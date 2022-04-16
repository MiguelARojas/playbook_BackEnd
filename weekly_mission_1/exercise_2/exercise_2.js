// aqui estamos creando una variable donde asignamos que necesitamos otro archivo
const example = require('./example_1')

example.info('This is a message you only can see if you have the file "examples.js"')

// si no llamamos el example.delete en el otro archivo nos generara error
example.delete('This is another message')

example.lastExample('Today is Friday 15')