const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise2(fn) {
	const that = this;
	that.status = PENDING;
	that.value = null;
	that.onFullfilled = [];
	that.onRejected = [];

	function resolve(state) {
		that.value = state;
		that.status = FULFILLED;
		that.onFullfilled.forEach((item) => item())
	}

	function rejected(error) {
		that.value = error;
		that.status = REJECTED;
		that.onRejected.forEach((item) => item())
	}

	try{
		fn(resolve, rejected);
	} catch(e) {
		rejected(e);
	}
}

Promise2.prototype.then = function(onFullfilled, onRejected) {
	const that = this;
	let promise2 = new Promise2((resolve, reject) => {
		switch (that.status) {
			case FULFILLED:
				setTimeout(() => {
					try{
						const value = onFullfilled(that.value);
						resolvePromise(promise2, value, resolve, reject);
					} catch(e) {
						reject(e);
					}
				})
				break;
			case REJECTED:
				setTimeout(() => {
					try {
						const value = onRejected(that.value);
						resolvePromise(promise2, value, resolve, reject);
					} catch(e) {
						reject(e);
					}
				})
			case PENDING:
				that.onFullfilled.push(() => {
					setTimeout(() => {
						try {
							let x = onFullfilled(that.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch(e) {
							reject(e);
						}
					})
				})
				that.onRejected.push(() => {
					setTimeout(() => {
						try {
							let x =onRejected(that.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch(e) {
							reject(e)
						}
					})
				})
				break;
		}
	})
	return promise2;
}

function resolvePromise(promise, x, resolve, reject) {
	if (promise === x) reject(new TypeError('chaing circle'));
	if (x && typeof x === 'object' || typeof x === 'function') {
		let then = x.then;
		let used;
		try{
			if (typeof then === 'function') {
				then.apply(x, (y) => {
					if (used) return;
					used = true;
					resolvePromise(promise, y, resolve, reject);
				}, (err) => {
					if (used) return;
					used = true;
					reject(err)
				})
			} else {
				if (used) return;
				used = true;
				resolve(x)
			}
		} catch(e) {
			if (used) return;
			used = true;
			reject(x);	
		}
	} else {
		resolve(x);
	}
}

