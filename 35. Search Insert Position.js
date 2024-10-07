/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = nums.indexOf(target);
    if(result !== -1){
        return result;
    } else{
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] > target){
                return i;
            }
        }
        return nums.length;
    }
};

let nums = [1,3,5,6];
let target = 5;

console.log(searchInsert(nums, target));


