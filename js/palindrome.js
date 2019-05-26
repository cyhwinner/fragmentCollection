	function palindrome(str) {
		let newStr = str.replace(/\W/g, '');
		return newStr === newStr.split('').reverse().join('');
		// body... 
	}

	console.log(palindrome('cato tac'))