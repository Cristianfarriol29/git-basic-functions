const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  
    let accumulator = 0;
    let accumulatorString = "";

param.forEach(elem => {

        
        if(typeof(elem) === "number"){
            accumulator += elem
            return accumulator
        }else if(typeof(elem) === "string"){
            
            accumulatorString += elem

            

            return accumulatorString
        }
    })

    console.log(accumulator)
    console.log(accumulatorString.length)

    


}


averageWord(mixedElements)