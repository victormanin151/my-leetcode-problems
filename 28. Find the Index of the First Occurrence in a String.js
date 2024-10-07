/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let result = haystack.indexOf(needle);
    if(result === -1){
        return -1;
    }else{
        return result;
    }
};



let h = "sadbutsad";
let n = "sad";

console.log(strStr(h,n));