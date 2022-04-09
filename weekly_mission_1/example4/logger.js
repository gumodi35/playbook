class Logger {
    constructor(name) {
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name // Estas variables se le conocen como atributos
    }

    // metodo
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este metodo
    info (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
    }

    // metodo
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
    }
}

// Esta clase se exporta en este modulo
module.exports = Logger