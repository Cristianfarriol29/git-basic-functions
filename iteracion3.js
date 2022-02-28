const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  
    let accumulator = 0;
    for (let i = 0; i < param.length; i++){


        accumulator += param[i]

    }

    promedio = accumulator / param.length

    return console.log(promedio)


}


average(numbers)