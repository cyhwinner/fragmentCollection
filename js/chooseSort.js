	function chooseSort (array) {
		let len = array.length;
		let minIndex = 0;
		for(let i = 0; i< len -1; i++) {
			minIndex = i;
			for(let j = i+1; j< len; j++){
				if(array[j] < array[minIndex]) {
					minIndex = j;
				}
			}
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
		return array;
	}

	console.log(insertSort([1,3,1,5,91,26,78,22]))
