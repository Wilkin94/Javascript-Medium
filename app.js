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
    return elem[elem.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));