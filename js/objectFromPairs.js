	function objectFromPairs(array) {
		return array.reduce((pre, cur) => 
			(Array.isArray(cur[1])? pre[cur[0]] = objectFromPairs([cur[1]]): pre[cur[0]] = cur[1], pre), {})
	}

console.log(objectFromPairs([['a',['c', '1']],['b',2]]))
