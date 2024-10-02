/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let reverse = x.split("").reverse().join("");
    if(x === reverse){
        return true;
    }
    else {
        return false;
    }
};

console.log(isPalindrome(121));