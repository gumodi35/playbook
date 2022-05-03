const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   // 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH");
   explorers.forEach(element => {
     console.log(element.name)
   })

   // 2.- Imprime el stack de cada explorer, usa FOR EACH
   console.log("Imprime el stack de cada explorer, usa FOR EACH");
   explorers.forEach(element => {
     console.log(element.stack)
   })

   // 3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP");
   const newList = explorers.map(function(explorer){return explorer.stack});
   console.log(newList)

   // 4.- Obten la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en una lista se usa el metodo includes)
   console.log("Obten la lista de explorers que tengan en su stack JS");
   const stackJS = explorers.filter((explorer) =>
    explorer.stack.includes('js'))
  console.log(stackJS)

  // 5.- Busca el primer explorer que sea de la CDMX, usa FIND
  console.log("Busca el primer explorer que sea de la CDMX, usa FIND");
  console.log(explorers.find((explorer)=> explorer.city === "CDMX"));

  // 6.- Obten la suma de todos los exercises_completed, usa REDUCE
  console.log("Obten la suma de todos los exercises_completed, usa REDUCE");
  let sumaExercices = explorers.reduce((acc, element) => acc + element.exercises_completed, 0);
  console.log(sumaExercices);

  // 7.- Obten la validacion si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
  console.log("Obten la validacion si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");

  const someProperty = explorers.some((b) => 
   b.missions.frontend.exercisesFinished === true
  )
  console.log(someProperty);

  // 8.-  Obten la validacion si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
  console.log("Obten la validacion si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
  let everyProperty = explorers.every((b) => 
   b.missions.onboarding.exercisesFinished === true
  )
  console.log(everyProperty);