/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let isPal = s.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    isPal = isPal.toLowerCase();
    let result = isPal;
    let sReversed = isPal.split("").reverse().join("");
    if(result === sReversed){
        return true;
    }else {
        return false;
    }
};

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));