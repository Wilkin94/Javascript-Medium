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