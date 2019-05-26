	function capitalizeEveryWord (str) {
		return str.split(' ').map(ele => ele.replace(ele[0], ele[0].toUpperCase())).join(' ');
	}

	function capitalizeEveryWord(str) {
		return str.replace(/\b[a-z]/g, chacter => chacter.toUpperCase())
	}
	console.log(capitalizeEveryWord('name is john hellow good'))