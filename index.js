function isPalindrome(word) {
  const normalizedStr = word.toLowerCase();
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

/* 
  Function isPalindrome(string)
    Convert string to lowercase
    Reverse the lowercase string
    If the original lowercase string is equal to the reversed string
        Return true
    Else
        Return false
*/

/*
  The function first converts the input string to lowercase to ensure the comparison 
  is case-insensitive. It then reverses the string by splitting it into an array of 
  characters, reversing the array, and joining the characters back into a string. Finally, 
  it compares the original lowercase string with the reversed string. If they are identical,
  the function returns true, indicating the string is a palindrome; otherwise, it returns
  false. This approach ensures accurate palindrome detection for any given string.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
