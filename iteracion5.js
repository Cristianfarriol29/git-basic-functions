const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
   
    
    const newArray = param.filter(function(element, position) {
        return param.indexOf(element) == position;
    })

    console.log(newArray)


  }


  removeDuplicates(duplicates)
  