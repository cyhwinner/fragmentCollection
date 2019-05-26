// 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
// 之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
// 此外，bind实现需要考虑实例化后对原型链的影响。


Function.prototype.bind2(content) {
	if(typeof this !== 'function') {
		throw('not a function');
	}

	let args = [...argument].slice(1);
	let that = this;
	let rejFunc = function(arguments) {
		that.apply(content, args.concat(...arguments));
	}

	function msg() {};
	msg.prototype = this.prototype;
	rejFunc.prototype = new msg();

	return rejFunc;
}