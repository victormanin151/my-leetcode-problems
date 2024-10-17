/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i];
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
    return nums;
};

let nums = [1,0,2,0,3,0,4];
console.log(moveZeroes(nums));

// this code creates new array 
// let n = [];
//       let counter = 0;
//       for (el of nums) {
//         if(el !== 0){
//             n.push(el);
//         }
//         else{
//             counter++;
//         }
//       }
//       for (let j = 0; j < counter; j++) {
//         n.push(0);
//       }
//     return n;