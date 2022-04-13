// Ejemplo 1: Crea un objeto vacio
let myObjeto = {}

// Ejemplo 2: Crea un objeto con propiedades
 const disco = {
     año: "2004",
     genero: "Electronica",
     artista: "Daft Punk"
 }

 // Ejemplo 3: Crea un objeto con propiedades diferentes
 let myCar = {
     año: "2022",
     modelo: "Audi",
     fabricante: "Audi"
 }

 // Ejemplo 4: Crea un objeto con metodos
 let persona = {
     nombre: "pedrito",
     apellido: "martinez",
     edad: "26",
     saludo: function () {
         console.log(`Hola, Soy ${this.nombre} mi apellido es ${this.apellido} y mi edad es: ${this.edad}`)
     }
 };

 // Ejemplo 5: Crea un objeto que reciba parametros
 function CuentaBancaria (datoTitular, datoApellidos, datoSaldo) {
        this.nombreTitular = datoTitular;
        this.apellidosTitular = datoApellidos;
        this.saldo = datoSaldo;
        this.mostrarDatos = function () {
            var msg = `Los datos de la cuenta son Nombre:${this.nombreTitular}`
            msg =`${msg} Apellidos:${this.apellidosTitular} Saldo: ${this.saldo}`
            console.log(msg)
        };
    }

    function ejemploCrearObjetos(){
        var cuenta1 = new CuentaBancaria('Barack','Obama',60000);
        cuenta1.mostrarDatos();
        var cuenta2 = new CuentaBancaria('Vladimir','Putin',1200000);
        cuenta2.mostrarDatos();
    }

ejemploCrearObjetos();