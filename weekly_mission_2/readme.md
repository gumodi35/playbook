# Weekly Mission 2

1. Objetos

Ve a la carpeta weekly_mission_2/examples y abre el archivo 0_objetos.js. Este archivo contiene muchos ejemplos de objetos para ti. Cada ejemplo esta delimitado por un comentario que dice // Ejemplo 1: Crear un objeto.

Crea un nuevo script de javascript con cada ejemplo del archivo mencionado, esto te ayudará a aislar cada ejemplo y tener una mejor organización. Corre el código en tu computadora y explora qué hace cada línea. El código funciona, por lo que eres libre de experimentar. Este archivo tiene 5 ejemplos, por lo que deberás crear 5 scripts y probarlos cada uno en tu equipo.

Sigue este ejemplo de cómo ir creando tus scripts de estos ejemplos:

Script: 0_objetos.js

Ejemplos que deberás desarrollar:

Crear un objeto vacío
Crear un objeto con propiedades
Crear un objeto con propiedades diferentes
Crear un objeto con métodos
Crear un objeto que reciba parámetros

2. Operadores
En JS existen operadores que nos facilitarán hacer ciertas manipulaciones de estructuras de datos. Ve al ejemplo 1_operadores.js y de igual forma crea un archivo de js para cada ejemplo para que lo pruebes por separado.

Script: 1_operadores.js

Ejemplos a desarrollar:

1. Ejemplo For Each
2. Ejemplo For Each
3. Ejemplo For Each
4. Ejemplo Map
5. Ejemplo Map
6. Ejemplo Map
7. Ejemplo de Filter
8. Ejemplo de Filter
9. Ejemplo de Reduce
10. Ejemplo de Every
11. Ejemplo de Find
12. Ejemplo de Find
13. Ejemplo de FindIndex
14. Ejemplo Some
15. Ejemplo de Sort
16. Ejemplo de Sort

3. Clases y Objetos
Ve al ejemplo 2_clases_y_objetos.js y de igual forma crea un archivo de js para cada ejemplo para que lo pruebes por separado.

Script: 2_clases_y_objetos.js

Ejemplos a desarrollar:

1. Crear clase vacía
2. Instanciar objetos de una clase
3. Instanciar Objeto con atributos
4. Métodos en los objetos
5. Atributos con valores por default
6. Getters
7. Setters
8. Métodos static
9. Herencia
10. Overriding methods

4. Modularización de clases
Ve al directorio 4_modularizacion_clases, explora los archivos:

explorer.js y viajero.js son las definiciones de las clases
package.json es un archivo json que nos permite definir la configuración de cualquier proyecto de node.
main.js es nuestro archivo principal para ejecutar el código.
Después de crear estos archivos, bastará con ejecutar el comando node main.js.

Directorio: 4_modularizacion_clases

5. Unit Testing
Ve al directorio 5_unit_tests/ y explora los archivos:

package.json contiene una línea que dice "jest": "^27.5.1", esto refiere a que descargará esta dependencia para usarla en nuestro proyecto.
pokemon.js es la definición de una clase
pokemon.test.js contiene una prueba de unidad para la clase Pokemon
Después de crear estos archivos basta con ejecutar el comando npm install y después npm test.

Directorio: 5_unit_tests/

Ejercicios
Dentro de tu playbook crea una carpeta que se llame exercises y ahí crea una carpeta por ejercicio.

Ejercicio 1
Modela los siguientes diagramas en objetos de JS:

Te resuelvo el primero (usa los console.log() para verificar que funcione):

Esta actividad se trata de empezar a modelar información con objetos simples de JS como el ejercicio 1. En el ejercicio anterior modelamos lo siguiente:

GitHub
repo
issue
pull_request
Ahora te pido modelar objetos de las siguientes plataformas, puedes desarrollar esto como tu gustes, ve a cada app y mira la información que puedes modelar. (Tu determinas los valores de cada llave, son meramente didacticos):

Twitter
user const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}
trending_topic
hashtag
Facebook
user
post
biography
Uber
profile
travel
Ejercicio 2
Toma la siguiente lista de explorers:

Sobre esta lista, realiza lo siguiente:

Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
Imprime el stack de cada explorer, usa FOR EACH
Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
Busca el primer explorer que sea de la CDMX, usa FIND
Obtén la suma de todos los exercises_completed, usa REDUCE
Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
Ejercicio 3:
Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.