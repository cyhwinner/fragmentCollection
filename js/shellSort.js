	function shellSort(array, step=4) {
		let len = array.length;
		for(step; step > 0; step = Math.floor(step / 2)) {
			for(let i = 0; i < len -1; i++) {
				let j = i;
				while( array[j] > array[j+1]) {
					[array[j+1], array[j]] = [array[j], array[j+1]];
					j--;
				}
			}
		}
		return array;
	}

	console.log(shellSort([1,3,1,5,91,26,78,22]))