function mergeSort(input, start, end) {
	// What is the base case
	// When can I no longer continue
	if (start < end) {
		const mid = Math.floor((start + end) / 2);
		mergeSort(input, start, mid);
		mergeSort(input, mid+1, end);
		merge(input, start, mid, end);
	}
}


function merge(input, start, mid, end) {
	let temp = [];
	let i = start;
	let j = mid + 1;
	let k = 0;

	while (i <= mid && j <= end) {
		if(input[i] <= input[j]) {
			temp[k++] = input[i++];
		} else {
			temp[k++] = input[j++];
		}
	}
	while (i <= mid) {
		temp[k] = input[i]
		k++;
		i++;
	}

	while (j <= end){
		temp[k] = input[j]
		k++;
		j++;
	}

	for(i = start; i<= end; i++){
		input[i] = temp[i - start];
	}
}
const arr = [15,4,3,2,1,3]

mergeSort(arr, 0, arr.length - 1);

console.log(arr)
