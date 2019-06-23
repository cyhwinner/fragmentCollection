const priceOption = {
    age: [18, 20],
    sex: ['男', '女'],
    hc: ['2-6人', '7-8人']
};

function permutations(array) {
	let newArray = [];
	let index = 0;
	for(let key in array) {
		const val = array[key];
		newArray[index] = [];
		val.forEach((item) => {
			const obj = {};
			obj[key] = item;
			newArray[index].push(obj);
		})
		index++
	}
	let newArr = []
	function queue(obj, index) {
		if (index === newArray.length){
			newArr.push(obj);
			return;
		}
		for(let value of newArray[index]) {
			obj = Object.assign({}, obj, value);
			queue(obj, index + 1)
		}
	}
	queue({}, 0);
	return newArr
}
console.log(permutations(priceOption))