 function powerset(array) {
	return	array.reduce((pre, cur) => pre.concat(pre.map(ele => [cur].concat(ele))), [[]])
 }
 
console.log(powerset([1, 2]))