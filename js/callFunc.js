// 将函数设为对象的属性
// 执行&删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window

Function.prototype.call2 = function(content) {
	let scope = content || window;
	//是函数设为当前作用域的属性
	scope.fn = this;
	const args = [...arguments].slice(1);
	const res = scope.fn(...args);
	delete scope.fn;
	return res;
}

