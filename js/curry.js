	function curry(fn, arg = fn.length, ...args) {
		return arg <= args.length?fn(...args) : curry.bind(null, fn, arg, ...args);
	}

	console.log(curry(Math.pow)(2)(4))