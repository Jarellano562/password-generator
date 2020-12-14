
//THE PASSWORD GENERATOR WILL PROVIDE A PASSWORD WITH YOUR OWN SPECIAL SELECTION DEPENDING ON WHAT YOU WANT

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//PASSWORD NEEDS TO INCLUDE ONE OF THESE OBJECTS
var pwdInfo = {
    lowercase: ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    number: ["0","1","2","3","4","5","6","7","8","9"],
    specialChar: [" ", ".", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "{", "}", "_", "`"]
};

// VARIABLES FOR CRITERIA TO INCLUDE IN THE PASSWORD 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//STORE THE RESULTS FOR THE PASSWORD 
var pwdChars = [];

// FUNCTION TO GENERATE A RANDOM PASSWORD
var generatePassword = function() {
    confirmLength = window.prompt(" HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD TO BE?");

    //ALERT MESSAGE IF PASSWORD IS TOO LONG
    while ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert("PASSWORD MUST BE BETWEEN 8 AND 128 CHARACTERS");
        confirmLength = window.prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD TO BE?");
    }
    //THE PASSWORD LENGTH 
    window.alert(`YOUR PASSWORD WILL HAVE ${confirmLength} CHARACTERS`);

    //TYPES THAT SHOULD BE INCLUDED INTO THE PASSWORD
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");

    //AT LEAST ONE CHARACTER TYPE SHOULD BE SELECTED 
    while (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
        alert("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE");
        confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
        confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
        confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
        confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
    }
    //RESULTS FOR PASSWORD STRING
    var randomPwd = "";

    if (confirmLowerCase) {
        pwdChars = [...pwdChars, ...pwdInfo.lowercase];
    }

    if (confirmUpperCase) {
        pwdChars = [...pwdChars, ...pwdInfo.uppercase];
    }

    if (confirmNumericCharacter) {
        pwdChars = [...pwdChars, ...pwdInfo.number];
    }

    if (confirmSpecialCharacter) {
        pwdChars = [...pwdChars, ...pwdInfo.specialChar];
    }
    //PASSWORD IS GENERATED WITH CRITERIA
    for (var i = 0; i < confirmLength; i++) {
        randomPwd = randomPwd + pwdChars[Math.floor(Math.random() * pwdChars.length)];
        console.log(randomPwd)
    }
    return randomPwd;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


