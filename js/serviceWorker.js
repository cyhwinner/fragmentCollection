// index.js
	if(navigator.serviceWorker) {
		navigator.serviceWorker.register('./src/node/cli.js')
	}

	//serviceWorker.js

	self.oninstall = function() {
		caches.open('place').then(cache => {
			cache.addAll([])// cache files
				.catch()
		})
		.catch()
	}

	self.onactive = function(e) {

	}

	self.onfetch = function(evnet) {
		event.respondWidth(
			caches.math(evnet.request)
				.then((cacheFile) => {
					if(cacheFile) {
						return cacheFile
					} else {
						fetch(event.request)
					}
				}))
	}