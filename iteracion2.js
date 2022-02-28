const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  

let word = "";
  for (let i = 0; i < param.length; i++) {
    if (word.length < param[i].length) {
      word = param[i];
    }
  }

  return console.log(word);


}


findLongestWord(avengers)