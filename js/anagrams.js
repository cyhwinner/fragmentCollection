	function anagrams (str) {
		if(str.length <= 2) {
			return str.length === 2? [str, str[1] + str[0]] : [str];
		}
		let strSplit = str.split('');
		return strSplit.reduce((pre, cur, index) => {
			return pre.concat(anagrams(str.slice(0, index) + str.slice(index+1)).map(val => cur + val))
		}, [])
	}

	console.log(anagrams('abc'))