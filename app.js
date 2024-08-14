// Q1. Falsy or Truthy

// Given two values, return the first one if it is falsy, otherwise return the second one.

// filterOutFalsy(0, 500) -> 0
// filterOutFalsy(false, 100) -> false
// filterOutFalsy([true, 'Dog']) -> 'Dog'

function falsyOrTruthy(elem1, elem2) {
    // !elem = true - 1 ! makes it true 
    // !!elem = false - 2 ! makes it false
    //if (!elem1) {
        // return the element
        //return elem1;
    //}
    //else {
        // return element 2
        //return elem2
    //}

    // the easier way is use a Ternary Operators

    return !elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(0, 5));
console.log(falsyOrTruthy(false, 100));
console.log(falsyOrTruthy(true, 'Dog'));

// Q2. Return the length of any given array

// Given an array, return its length

// arrLength([1, 2, 3]) -> 3
// arrLength([5, 0, -4, 1]) -> 4
// arrLength([]) -> 0

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// Q3 Get the last element in an array

// Given an array, return the first element

// lastElem([3, 2, 0, 6, 2]) -> 2
// lastElem(['dog', 'cat', 'ball']) -> 'ball'
// lastElem([null, 5, false]) -> false

function lastElem(elem) {
    // to get the last element of the array you need to get the lengh - 1
    // arrays always start at 0 ex. 0, 1, 2, 3, 4, 5
    return elem[elem.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));

// Q4. Find the sum of an array

// Given an array, return the sum of an array

// arrSum([2, 2, 2]) -> 6
// arrSum([100, 200, 500]) -> 800
// arrSum([0, -5, -10]) -> -15

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        // this is how you loop through every element in an array
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Q5. Add up the numbers from a single number

// Given a number, add up all the numbers from one to the number that is given.
// E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.

// progressiveSum(3) -> 6
// progressiveSum(4) -> 10
// progressiveSum(600) -> 180300

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

// Q6. Calculate the time

// Given a number in second, return this number is mm:ss format

// calctime(66) -> '01:06'
// calctime(50) -> '00:50'
// calctime(300) -> '05:00'

function calcTime(seconds) {
    let timerMinutes =  Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));
console.log(calcTime(500));

// Q7. Find the largest number

// Given an array of numbers, return the largest number of that array

// getMax ([5, 100, 0]) -> 100
// getMax ([12, 10, -20]) -> 12
// getMax ([-300, -100, -200]) -> -100

function getMax(arr) {
    let max = arr[0]; // Initialize max with the first element of the array
    for (let i = 0; i < arr.length; ++i) {
        // Start looping from the second element
        if (arr[i] > max) {
            max = arr[i]; // update max if the current element is larger
        }
    }
    return max; // return the largest number found
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

// Q8 Reverse a string

// Given a string, return the reserved string

// reverseString('abc') -> cba
// reverseString('wilkin') -> nikliw
// reverseString('this is cool') -> looc si siht

// - use an incrementing for loop
// - use a decrementing for loop
// - use the array reverse property


// incrementing for loop method
function reverseString(str) {
    let reverseString = '';
    for (let i = 0; i < str.length; ++i) {
        // this is how you loop throught every character in a spring
        reverseString = str[i] + reverseString
    }
    return reverseString;
}

console.log(reverseString('abc'));
console.log(reverseString('wilkin'));
console.log(reverseString('this is cool'));

// decrementing for loop method

function reverseString(str) {
    let reverseString = '';
    for ( let i = str.length - 1; i >= 0; --i) {
        reverseString = reverseString + str[i]
    }
    return reverseString;
}

console.log(reverseString('abc'));
console.log(reverseString('wilkin'));
console.log(reverseString('this is cool'));

// array reverse property - how to reverse a string in javascript method
       
                      // inside of the console !!!!

                    
 // how to turn a string into and array inside the javascript console

 // 'abc'.split('')
 // ['a','b','c']

 // how to reverse a string

 // 'abc'.split('').reversed
 // ['c','b','a']

 // how to return it into a string

 // 'abc'.split('').reverse().join('')
 // 'cba'

 // split = converts a str to an array
 // reverse = reverses an array
 // join = returns array into a str


 function reverseString(str) {
    return str.split('').reverse().join('');
 }

 console.log(reverseString('abc'));
console.log(reverseString('wilkin'));
console.log(reverseString('this is cool'));

// Q9 Turn every element in an array into 0

// Given an array of elements, return the same length array filled with 0's

// convertToZeros([5, 100. 0]) -> [0, 0, 0]
// convertToZeros([12]) -> [0]
// convertToZeros([1, 2, 3, 4, 5]) -> [0, 0, 0, 0, 0]

// - solution 1: for loop
// - solution 1: array 'fill'
// - solution 1: array 'map'

// for loop method
function convertToZeros(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr;
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

// array 'fill' method

function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));


// array 'map' method

// map lets you map over every element of an array / change every single element in the array
// converts and element in your array into something else
// arr = apples but i want to change them to bananas
// arr.map(elem => bananas)
// the apples are now bananas

function convertToZeros(arr) {
    return arr.map(elem => 0)
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

// Q10 Filter out all the apples

// Given an array of fruits, if it is an apple remove it from an array

// removeApples(['banana', 'apple', orange', 'apple']) -> ['banana', 'orange']
// removeApples(['tomato', 'orange', 'banana']) -> ['tomato', 'orange', 'banana']
// removeApples(['banana', 'orange', 'apple']) -> ['banana', 'orange']

// - solution 1: for loop
// - solution 2: array 'filter'

// for loop method
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'apple') {
            // .push adds and element to the end of an array
            noApples.push(arr[i])
        }
    }
    return noApples;
}

console.log(removeApples(['banana', 'apple', 'orange', 'apple']));
console.log(removeApples(['tomato', 'orange', 'banana']));
console.log(removeApples(['banana', 'orange', 'apple']));

// array 'filter' method

 function removeApples(arr) {
    return arr.filter(elem => elem !== 'apple')
 }

console.log(removeApples(['banana', 'apple', 'orange', 'apple']));
console.log(removeApples(['tomato', 'orange', 'banana']));
console.log(removeApples(['banana', 'orange', 'apple']));

