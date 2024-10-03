/**
 * @param {number[]} nums
 * @return {number}
 */

//two point approach

var removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;    
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));


//my answer wrong bc i make a copy of the original array.

// var removeDuplicates = function(nums) {
//     let result = nums.filter((item,
//         index) => nums.indexOf(item) === index);
//     return result.length;
// };