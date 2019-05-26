	function countOccurrences(array ,val) {
		return array.reduce((pre, cur) => val === cur? pre+1:pre, 0)
	}

	console.log(countOccurrences([1,1,2,4,5,5], 1))