/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let bInt = BigInt(digits.join(''))
    bInt++
    const numStr = String(bInt);
    let result = [];
    for (let i = 0; i < numStr.length; i++) {
        result.push(Number(numStr[i]));
    }
    return result;
};

let numbers = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(numbers));



