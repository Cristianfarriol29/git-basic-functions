const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, paramName) {
    
    const nameBoolean = param.includes(paramName)
    
    param.find((name, index) => {

       
        if(name === paramName){

             console.log(`El nombre ${name} es ${nameBoolean} y esta en el indice ${index}`)
        }



    })

    


  }


  finderName(nameFinder, "Peggy")