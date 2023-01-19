// Array of special characters to be included in password
let specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.'
 ];
 
 // Array of numeric characters to be included in password
 let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
 // Array of lowercase characters to be included in password
 let lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
 ];
 
 // Array of uppercase characters to be included in password
 let upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
 ];
 
 // This function will present 5 prompts to the user
 // The first one askes to choose the length of the password. 
 //If user picks a number, then another prompt will appear, if cancels there will be no furthur actions.
 function getPasswordOptions() {
	let length = +prompt("Please enter the number of characters from 10 to 64", "10");

	if (length === NaN || length < 10 || length > 64) 
	return null;

	//User should pick which characters should be included to the password
	let includeLowerCase = prompt("Do you want to include lowercase characters?", "Yes") === "Yes";
	let includeUpperCase = prompt("Do you want to include uppercase characters?", "Yes") === "Yes";
	let includeNumbers = prompt("Do you want to include numbers?", "Yes") === "Yes";
	let includeSpecialCharacters = prompt("Do you want to include special characters?", "Yes") === "Yes";


	//If at least one of the value is true the password will be generated
	// If not, there will be no furthur actions
	if (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters) {
		return {
			length,
			includeLowerCase,
			includeUpperCase,
			includeNumbers,
			includeSpecialCharacters
		} 
	} else {
			return null;
		}
 }

 console.log(getPasswordOptions());
 
 // This function picks random numbers, special, upper and lowercased characters 
 function getRandom(array) {
	const index = Math.floor(Math.random() * array.length);
   const item = array[index];
   return item;
 }
 
 // If none of the options were selected, there will be no furthur actions 
 // If selection was made, all the arrays given above will concatinate in one - characters
 function generatePassword() {
	const options = getPasswordOptions();
	if (options === null) return;

	let characters = [];

	if (options.includeLowerCase) {
		 characters = characters.concat(lowerCasedCharacters);
	}

	if (options.includeUpperCase) {
		 characters = characters.concat(upperCasedCharacters);
	}

	if (options.includeNumbers) {
		 characters = characters.concat(numericCharacters);
	}

	if (options.includeSpecialCharacters) {
		 characters = characters.concat(specialCharacters);
	}

	//To generate the password we need to go through the for loop, depending on which options user picked
	let password = " ";

	for (let i = 0; i < options.length; i++) {
		 password = password + getRandom(characters);
	}

	return password;
 }

 
 
 // Get references to the #generate element
 var generateBtn = document.querySelector('#generate');
 
 // Write password to the #password input
 function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
 
	passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener('click', writePassword);