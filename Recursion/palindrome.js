function palindrome(input) {
	// What is the base case
	// When can I no longer continue
	// when input is either 0 or 1
	if (input.length == 0 || input.length == 1) {
		return true;
	}

	// whats is the smallest amount of work I can do in each iteration?

	// Compare ends
	if (input.charAt(0) === input.charAt(input.length - 1)) {
		// Debug
		console.log({
			"begining": firstChar,
			"end": lastChar,
			"substring": input.substring(
				1,
				input.length - 1)
		})

		// then pull off substring
		return palindrome(
			input.substring(
				1,
				input.length - 1))
	}

	return input;

}
console.log(palindrome("racecar"))
// Example "racecar"
// Base case 

// Solution compare ends and shrink
// r _ _ _ _ _ r === match
// a _ _ _ a  === match
// c _ c === match


// 1. palindrome("racecar") 
// 2. palindrome("aceca")
// 3. palindrome("cec")
// 4. palindrome("e")
// Done return True
