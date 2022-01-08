function sumNaturalNumbers(number) {
	// What is the base case
	// When can I no longer continue
	// when decimal is either 0 or 1
	if (number == 0) {
		return number;
	}

	// whats is the smallest amount of work I can do in each iteration?
	console.log({
		number,
	})
	return number
	 + sumNaturalNumbers(
		--number
	);


}

console.log(sumNaturalNumbers(10))
// Example 10
// Base case:  ??
// Reduce to smaller problem 
// decrement number

// Solution 
// add Numbers together and decrement number



// Reverse Call Stack 
// sumNaturalNumbers(10) 
// number = 10
// 1. number 
	// + sumNaturalNumbers(10 - 1) = return 9
	// + sumNaturalNumbers(9 - 1)  = return 8
	// + sumNaturalNumbers(8 - 1)  = return 7
	// + sumNaturalNumbers(7 - 1)  = return 6
	// + sumNaturalNumbers(6 - 1)  = return 5
	// + sumNaturalNumbers(5 - 1)  = return 4
	// + sumNaturalNumbers(4 - 1)  = return 3
	// + sumNaturalNumbers(3 - 1)  = return 2
	// + sumNaturalNumbers(2 - 1)  = return 1
	// + sumNaturalNumbers(1 - 1)  : done
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
// Done: answer 55

