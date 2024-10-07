/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// classic two pointer

var removeElement = function(nums, val) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[result] = nums[i];
            result++;
        }
        
    }
    return result;
};

const nums = [3,2,2,3];
const val = 3;
console.log(removeElement(nums, val));



// my take works but not as good

// var removeElement = function(nums, val) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] === val){
//             nums.splice(i,1);
//             i--;
//         }
//         else{
//             result++;
//         }
//     }
//     return result;
// };
