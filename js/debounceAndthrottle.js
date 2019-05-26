	function debounce (fn, wait, immediate) {
		let timer = null;
		if(immediate && !timer) {
			fn();
		}
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn();
		}, wait);
	}

	function throttle(fn, wait, immediate) {
		let timer = null;

		if(immediate && !timer) {
			fn();
			immediate = false;
		}
		if(!timer) {
			timer = setTimeout(() => {
				fn();
				timer = null;
			}, wait)
		}
	}

	//spec
			function debounce(fn, wait, immediate) {
				return function() {
					let that = this;
					let timer = null;
					let arg = arguments;

					if(immediate && !timer) {
						fn.apply(that, arg);
					}
					if(timer) clearTimeout(timer);
					timer = setTimeout(() => {
						fn.apply(that)
					}, wait);
				}
			}


		function throttle(fn, wait, immediate) {
			let timer = null;
			return function () {
				let that = this;
				let arg = arguments;
				let callNow = true;
				if(callNow) {
					fn.apply(that, arg);
					callNow = false;
				}

				if(!timer) {
					timer = setTimeout(() => {
						fn.apply(that, arg)
						timer = null;
					}, wait)
				}

			}
		}