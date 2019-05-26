	function sortCharactersInString (str) {
		return str.split('').sort((a, b) => a.localeCompare(b)).join('');
	}

	console.log(sortCharactersInString('cabbage'))