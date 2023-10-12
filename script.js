function rot13(str) {
  // Split the string into an array of characters
  return str.split('').map(function(char) {
    // Check if the character is an uppercase letter
    if (char.match(/[A-Z]/)) {
      // Use the ASCII code to determine the new character after ROT13
      // Rotate 13 positions, wrapping around if necessary
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else {
      // If the character is not an uppercase letter, leave it unchanged
      return char;
    }
  }).join(''); // Join the characters back into a string
}

// Example usage:
const encodedString = "URYYB JBEYQ";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "HELLO WORLD"

