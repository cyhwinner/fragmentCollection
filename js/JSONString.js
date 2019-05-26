// Boolean | Number| String 类型会自动转换成对应的原始值。
// undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
// 不可枚举的属性会被忽略
// 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。

function jsonStringif(obj) {
	const type = typeof obj;
	if(type === 'object' || obj === null) {
		if((/string|undefined|function/).test(type)) {
			return '"' + obj + '"';
		}
		return String(obj);
	} else {
		const json = [];
		const isArr = obj && obj.constructor === Array;
		for(const key in obj) {
			let val = obj[key];
			let type = typeof val;
			if((/string|undefined|function/).test(val)) {
				val = '"' + val + '"'
			}
			if(type === 'object') {
				val = jsonStringif(val);
			}
			json.push((isArr? '' + '"' + key + '":') + String(val));
		}
		return (isArr? '[' : "{") + String(json) + (isArr? ']' : '}');
	}
}

