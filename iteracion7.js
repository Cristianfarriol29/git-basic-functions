const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    
let counter = 0;

param.filter(function(element, position) {

    if(param.indexOf(element) == position){

        return counter +=1

    }
})

console.log(counter)

    


  }


  repeatCounter(counterWords)