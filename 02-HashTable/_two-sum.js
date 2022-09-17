
/* 
problem:
 You are given an array of integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

*/


// Brode force teqnique (not a good solution)
function findIndicesSum(array, targetValue) {
    for (let i = 0; i < array.length - 1; i++) { //0(n)
        for (let j = i + 1; j < array.length; j++) { //0(n^2)
            if (targetValue === array[i] + array[j]) {
                return [i, j];
            }

        }
    }
    return [];
}

let array = [1, 2, 3, 4, 5];
let targetValue = 6;
console.log(findIndicesSum(array, targetValue));