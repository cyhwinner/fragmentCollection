	function factorial(num, res = 1) {
		if(num <= 1) {
			return  1 * res;
		} else {
			let result = num * res;
			return factorial(num-1, result);
		}
	}