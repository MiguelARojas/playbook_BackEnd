// invocamos el modulo que contendra nuestra clase
const Logger = require('./example_4')

// creamos nuestro objeto el cual llama al constructor de nuestra clase
const DbLogger = new Logger('DATABASE')

// invocamos al metodo
DbLogger.info('This is a message')


// creamos otro objeto
const access = new Logger('ACCESS')
access.info2('This is another message')