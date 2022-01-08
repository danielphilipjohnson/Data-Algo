const canSum = (targetSum, numbers, memo=new Map())=>{

	// take away a number from target sum
	// const key = 
	if(memo.has(targetSum)) return memo.get(targetSum);
	
	if(targetSum === 0) return true;
	if(targetSum < 0) return false;

	for (const num of numbers) {
		// key 
		const remainder = targetSum - num
		if(canSum(remainder, numbers, memo) === true){
			memo.set(targetSum, true);
			return true;
		}
	}
	memo.set(targetSum, false);
	return false;
}

console.log(canSum(1000, [7,14]))