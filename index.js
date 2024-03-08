// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Main code to use the helper function
  const testString = "level"; // You can change the test string
  if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
  } else {
    console.log(`${testString} is not a palindrome.`);
  }
  