// Assignment Code
// target the button "generate"
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    // console.log("Clicked!");
    while(true){
    // Prompt the user for password length
    var passwordLength = parseInt(prompt("How many characters should the password contain? (Enter a number between 8 and 128)"));

    // Validate the user input
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input! Password length must be a number between 8 and 128!");
      
    } else {

      // Define character sets for each type of character
      var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numberChars = "0123456789";
      var symbolChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

    // Prompt the user for character types to include in the password
    var characters = "";
    var password = "";

    // Add characters based on user's selections
    if (confirm("Include lowercase letters?")) {
      characters += lowercaseChars;
    }

    if (confirm("Include uppercase letters?")) {
      characters += uppercaseChars;
    }

    if (confirm("Include numbers?")) {
      characters += numberChars;
    }

    if (confirm("Include symbols?")) {
      characters += symbolChars;
    }
 
    // Generate password
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  return password;
  }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
// event listerner react to the "click" action and call the "writePassword function"
generateBtn.addEventListener("click", writePassword);





