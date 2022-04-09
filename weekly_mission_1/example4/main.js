const Logger = require('./logger') // Invocas el modulo que contiene la clase

// Creacion de un Objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// Invocacion del metodo
dbLogger.info('This is a informational message')

// Creacion de otro Objeto
const accesLogger = new Logger('ACCESS')
accesLogger.verbose('This is a verbose message')