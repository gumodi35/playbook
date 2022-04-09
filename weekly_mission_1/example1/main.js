// 1. Creacion de un objeto con propiedades

let myCar = new Object(); // -> Creacion de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

//console.log(myCar); // -> Imprimiendo objeto

// 2. Declaracion de un objeto con variables locales y publicas

const myModule = (() => {

    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,3,4];
    const baz = "Soy un valor que va ser expuesto";

    // Variables para guardar las variables locales
    const exported = {
        publicFoo: "Valor publico, pueden verme desde donde me llamen",
        publicBar: "Otro valor publico",
        publicBaz: baz
    }

    // Exposicion de variables locales
    return exported
}) ()

console.log(myModule);
