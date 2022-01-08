function fib(number) {
	// What is the base case
	// When can I no longer continue
	if (number == 0 || number == 1) {
		return number;
	}

	else {
		return fib(number - 1) + fib(number - 2);
	}

}

console.log(fib(5))
// Example 5
// Base case:  0 | 1

// Reduce to smaller problem 
// decrement number

// Solution 
// formula Fn = fn-1 + fn-2
// how its calculated: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 0, 1, ?
// 0 + 1 = 1
// 0, 1, 1, ?
//    1 + 1  = 2
// 0, 1, 1, 2, ?
//       1 + 2 = 3
// 0, 1, 1, 2, 3, ?
//          2 + 3 = 5
// 0, 1, 1, 2, 3, 5 .....



// Reverse Call Stack 

// Done: answer 55

