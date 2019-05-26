	function flatten(arr, result = []) {
		var remain;
		var curIndex = -1;
	    // for (let item of arr) {
	    //     if (Array.isArray(item)) {
	    // 		flatten(item, result)
	    //     } else {
	    //         result.push(item)
	    //     }
	    // }
	    arr.every((ele, index) => {
	    	if(Array.isArray(ele)){
	    		curIndex = index;
	    		return false;
	    	} else {
	    		result.push(ele);
	    		return true;
	    	}
	    })
	    if(curIndex !== -1) {
		    remain = arr.splice(0, curIndex+1);
		    arr.unshift(...remain[curIndex])
		    return flatten(arr, result)
	    } else {
	    	return result
	    }
	}

	//other

	function flatten(arr) {
		return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur)? flatten(cur): cur), []);
	}