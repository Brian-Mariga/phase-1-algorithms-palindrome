function isPalindrome(word) {
  // Write your algorithm here
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  Add your pseudocode here
1. Initialize two pointers, one at the start and one at the end of the string.
2. Loop until the start pointer is less than the end pointer:
   a. If the characters at the start and end pointers are not equal, return false.
   b. Move the start pointer forward and the end pointer backward.
3. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here
  The the code above is to determine whether a given string is a palindrome.
  The isPalindrome function follows the pseudocode closely. Two pointers (start and end) are assigned and used for comparing characters at each step. If any pair of characters is not equal, the function returns false. If the loop completes without returning false, it means the string is a palindrome, and the function returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
