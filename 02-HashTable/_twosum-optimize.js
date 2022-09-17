/* 
problem:
 You are given an array of integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

 [1,2,3,4], tV=7, it should return [3,4]

*/

function findIndicesSum(array, targetValue) {

    const hashTable = {};
    let neededValue;

    for (let i = 0; i < array.length; i++) {
        neededValue = targetValue - array[i];

        if (neededValue in hashTable) {
            return [hashTable[neededValue], i]
        }
        else {
            hashTable[array[i]] = i;
        }
    }
    return [];
}

array = [1, 2, 3, 5];
targetValue = 5;
console.log(findIndicesSum(array, targetValue)); 