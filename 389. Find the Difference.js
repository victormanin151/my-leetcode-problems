/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
    let charCount = {};
    
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of t) {
        if (!charCount[char]) {
            return char;
        } else {
            charCount[char]--;
            if (charCount[char] < 0) {
                return char;
            }
        }
    }
};


console.log(findTheDifference("abcd", "abecd"));


// var findTheDifference = function(s, t) {
//     let str1 = s.split("");
//     let str2 = t.split("");

//     for (let i = 0; i < s.length; i++) {
//         if(t.includes(s[i])){
//             let index = t.indexOf(s[i]);
//             t[index] = "";
//         }
//     };
//     return t;
// }