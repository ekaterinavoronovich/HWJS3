/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  return str.trim().toUpperCase();
            
}

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  if (array.length === 0){
    return NaN}
    {
    return Math.max(...array);
    }
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  if (str.length === 0){
    return []
  }
  return str.split(', ').map ((item)=> item.length)
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  if (numArray.length === 0) {
    return []}
    return numArray.map( item => Math.pow(item,degree));
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  return text.split('. ').map ((item)=> `${item[0].toUpperCase()}${item.slice(1)}`).join('. ')
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  if (array.length === 0) {
    return []}
    return  array.filter( item => item > 0 && Number.isFinite(item));
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  return array.indexOf(value);
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  return array.find(item => item == value);
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  if(array.length == 0) {return false};
   for (let item of array) {
    if ( !item.includes (word)){
      return false; }
     };
     return true; 
    };
  

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  for ( let item of array) {
    if(item < 0 && Number.isFinite(item)){
      return true;}
    }
    return false;                       
  }                                         

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  if (array.length === 0) {
    return [];}
    return array.slice (startPosition,endPosition+1);
  } 


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
