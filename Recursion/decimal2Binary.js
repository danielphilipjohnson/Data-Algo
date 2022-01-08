function decimalToBinary(decimal, result="") {
	// What is the base case
	// When can I no longer continue
	// when decimal is either 0 or 1
	if (decimal <= 0) {
		return result;
	}

	// whats is the smallest amount of work I can do in each iteration?
	// get quotient
	const quotient  = Math.floor(decimal / 2);
	let remainder = decimal % 2;
	// push the remainder before the result
	// we need to prepend the remainder
	result = remainder + result; 

	console.log({
		subproblem: Math.floor(decimal / 2),
		remainder: result
		}
	)
	return decimalToBinary(quotient, result);
}
console.log(decimalToBinary(233))
// Example 233
// Base case:  < 0 

// Solution 
// get quotient = Math.floor(y / x) : this makes the problem smaller
// get remainder = y % x store as a result


// Reverse Call Stack 
// 1. decimalToBinary(233) get quotient 233 / 2 = 116 
// 2. decimalToBinary(116) get quotient 116 / 2 = 58
// 3. decimalToBinary(58) get quotient 58 / 2 = 29
// 4. decimalToBinary(29) get quotient 29 / 2 = 14
// 4. decimalToBinary(14)get quotient 14 / 2 = 7 
// 4. decimalToBinary(7) get quotient 7 / 2 = 3
// 4. decimalToBinary(3) get quotient 3 / 2 = 1
// 4. decimalToBinary(1) get quotient 1 / 2 = 0
// 4. decimalToBinary(0) finished

// Done return True
