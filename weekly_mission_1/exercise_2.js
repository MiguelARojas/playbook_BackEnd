// aqui estamos creando una variable donde asignamos que necesitamos otro archivo
const example = require('./examples.js')

example.info('This is a message you only can see if you have the file "examples.js"')
example.delete('This is another message')