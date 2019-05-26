	const pipe = (...func) => arg => func.reduce((pre, fn) => fn(pre), arg);

	console.log(pipe(window.btoa, x => x.toUpperCase())("Test"))

	// let pipe = (...fn) => arg => fn.reduce((pre, cur) => fn(pre), arg);