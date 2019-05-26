	function insertSort (array) {
		let len = array.length;

		for(let i = 0; i < len; i++) {
			let j = i;
			while (array[j] > array[j+1]) {
				[array[j], array[j+1]] = [array[j+1], array[j]];
				j--;
			}
		}
		return array;
	}

	console.log(insertSort([5,3,1,5,91,26,78,22]))
