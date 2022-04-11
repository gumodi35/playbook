// definimos la clase Pokemon
class Pokemon {
    constructor(name) {
        this.name = name
    }
// designamos los metodos 
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda`);
    }
    sayMessage(msg) {
        console.log(`Mi pokemon ${this.name} dice: Heey¡`);
    }
}

// exportamos el modulo
module.exports = Pokemon