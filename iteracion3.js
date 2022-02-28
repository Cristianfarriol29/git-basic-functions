const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

    let accumulator = 0;


    param.forEach(number => {

     accumulator += number;

     

    })

    return(console.log(accumulator))

}


sumAll(numbers)