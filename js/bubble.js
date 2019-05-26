function bubbleSort(arr) {
	let len = arr.length;
	for(let i = 0; i< len - 1; i++) {
		for(let j = 0; j < len -1 -i; j++) {
			if(arr[j] > arr[j+1]) {
				[arr[j+1], arr[j]] = [arr[j], arr[j+1]]
				console.log(arr)
			}
		}
	}
	return arr;
}
console.log(bubbleSort([ 1, 3, 5, 5, 22, 26, 78, 91 ].reverse()))