	function averageArr(array) {
		return 	array.reduce((pre, cur) => pre + cur, 0) / array.length
	}

	console.log(averageArr([1,2,3]))