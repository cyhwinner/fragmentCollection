	function arrayDiff(a, b) {
		return a.reduce((pre, cur) => b.some(ele => ele === cur)?pre: pre.push(cur), [])
	}

	getArrDifference = function(arr1, arr2) {
 
    return arr1.concat(arr2).filter(function(v, i, arr) {
 
        return arr.indexOf(v) === arr.lastIndexOf(v);
 
    });
 
},


	console.log(getArrDifference([1,2,3], [2,3,4]))