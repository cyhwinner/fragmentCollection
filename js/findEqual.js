var a = [
      {'id': '1001', 'name': '值1', 'value': '111'},
      {'id': '1001', 'name': '值1', 'value': '11111'},
      {'id': '1002', 'name': '值2', 'value': '25462'},
      {'id': '1002', 'name': '值2', 'value': '25462'},
      {'id': '1002', 'name': '值2', 'value': '2315432'},
      {'id': '1003', 'name': '值3', 'value': '333333'}
    ]

    function findEqual(arr) {
		let b = [];
		arr.forEach((ele) => {
		 	let equal = false;
		 	if (b.length  ===  0) {
		 		b.push(ele)
		 		return;
		 	};
		 	for(let i = 0, len = b.length; i < len; i++) {
				let isEqual = true;
				let item = b[i];
				for(let key in item) {
					if (item[key] !== ele[key]){
						isEqual = false;
					}
				}
				equal = !isEqual ? false : true;
		 	}
	 		equal === false ? b.push(ele) : ''
		});
		return b
    }
console.log(findEqual(a))