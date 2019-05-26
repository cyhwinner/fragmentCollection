	function quickSort (array) {
		let len = array.length;
		if(len <= 1 ) return array;
		let midIndex = Math.floor(len /2 );
		let leftArr = [];
		let rightArr = [];
		let midValue = array.splice(midIndex, 1)[0];

		array.forEach(ele => {
			if(ele > midValue) {
				rightArr.push(ele);
			} else {
				leftArr.push(ele);
			}
		})

		return quickSort(leftArr).concat(midValue, ...quickSort(rightArr));
	}

console.log(quickSort([1,3,1,5,91,26,78,22]));