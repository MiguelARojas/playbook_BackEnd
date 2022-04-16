// llamamos nuestro modulo donde nos modifica nuestro objeto instanciado
require('./patcher')

// al llamar nuestro modulo nos retorna nuestro objeto modificado
const logger = require('./example_6')

logger.customMessage()