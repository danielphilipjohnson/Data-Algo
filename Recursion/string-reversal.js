function stringReverse(input){
	// What is the base case
		// When can I no longer continue
		// empty string
	if(input === "") return "";
	// whats is the smallest amount of work I can dp in each iteration?
	return stringReverse(input.substring(1)) + input.charAt(0);
}

console.log(stringReverse("hello"));

// Example "Hello"
// 1. stringReverse("ello") + "h" 
// 2. stringReverse("llo") + "e"
// 3. stringReverse("lo") + "l"
// 4. stringReverse("o") + "l"
// 5. stringReverse("") + "o"
// Done 

console.log(stringReverse("awesome"));