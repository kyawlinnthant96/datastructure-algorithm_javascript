// longest palindrome
// function longestPalindrome(s) {
//     let longestPalindrome = "";

//     for (let i=0; i<s.length; i++){
//         let currentPalindrome = s[i]
//         let right = 1;
//         while(s[i] === s[i+right]){
//             currentPalindrome = s.substring(i, i+right+1)
//             right+=1
//         }
//         let left = 1;
//         while(i-left>=0 && i+right<s.length && s[i-left] === s[i+right]){
//             currentPalindrome = s.substring(i-left, i+right+1)
//             left++;
//             right++;
//         }
//         if(currentPalindrome.length >= longestPalindrome.length){
//             longestPalindrome = currentPalindrome
//         }
//     }

//     return longestPalindrome;
// };
