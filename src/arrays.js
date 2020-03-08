const getNthElement = (index, array) => {
  return index<array.length? array[index] : array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  const reversed = [];
  input = strings.toString().split(',');
  for (let i=0; i<strings.length; i++){
  reversed.push( input[i].split('').reverse().join(''));
  }
  return reversed;
};

const onlyEven = numbers => {
  const evens = numbers.filter(x => {
    return x % 2 === 0;
  });
  return evens;
};

const removeNthElement2 = (index, array) => {
 const newArr = array.filter(word => {return word != array[index];})
 return newArr;
};  

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiou]/i.test(string));
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  let sum = numbers.reduce((a, b) =>{
    return a + b;
  });
  return sum;
  };

const sortByLastLetter = strings => {
  let string1 = strings.toString();
  return string1;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
