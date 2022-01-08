function binarySearch(arrayToSearch, guess, left=0, right=0) {

	var right = right === 0 ?  arrayToSearch.length : right;

	// there is an overlap 
	if (left > right) {
		return -1;
	}

	// calculate mid point
	const mid = Math.floor((left + right) / 2)

	// Check middle of the array
	if (guess == arrayToSearch[mid]) {
		return mid;
	}

	// Check left of the array
	if (guess < arrayToSearch[mid]) {
		return binarySearch(arrayToSearch,  guess, left, mid - 1)
	}

	// check right of the array

	return binarySearch(arrayToSearch, guess, mid + 1, right)
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 1))

