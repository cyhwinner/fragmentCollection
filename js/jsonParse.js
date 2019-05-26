	function jsonPase(opt) {
		return eval( '(' + opt+ ')');
	}

	jsonPase(JSON.stringify({x: 1}))

	function jsonFuncParse(opt) {
		return (new Function('return' + opt)())
	}