// memoization
// key = step , vale return value

const fibMap = (n, memo=new Map()) => {
	if(memo.has(n))return memo.get(n);

	if (n <= 2)
		return 1;

	memo.set(n, fibMap(n - 1, memo) + fibMap(n - 2,memo))
	return memo.get(n);
}

const fibObj = (n, memo={}) => {
	if(n in memo)return memo[n];

	if (n <= 2)
		return 1;

	memo[n] = fibObj(n - 1, memo) + fibObj(n - 2,memo)
	return memo[n];
}



console.time("fib50");
console.log(fibMap(50));

console.timeEnd("fib50");


console.time("fibObj0");
console.log(fibObj(50));

console.timeEnd("fibObj0");