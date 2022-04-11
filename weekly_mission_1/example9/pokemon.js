// agregamos el export
export default class Pokemon {
    constructor(name) {
        this.name = name
    }
    // agregamos los metodos
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }
    sayMessage(msg) {
        console.log(`Mi pokemon ${this.name} dice: ${msg}`);
    }
}