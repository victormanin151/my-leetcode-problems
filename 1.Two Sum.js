var twoSum = function(nums, target) {
    let something={};
    let result=[];
    for( let i=0; i<nums.length; i++)
        {
            if(something[nums[i]]!==undefined)
                {
                    result.push(something[nums[i]],i);
                    break;
                }
            else{
                something[target-nums[i]]=i;
            }
        }
        return result;
    };

console.log(twoSum([2,7,11,15],9));


// first accepted

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) 
//        {
//            for (let j = i + 1; j < nums.length; j++) {
//                if(nums[i] + nums[j] === target)
//                    {
//                        return [i , j];
//                    }
//            }
//        };
//    };