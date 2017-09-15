var loading      = {};
var loadedScript = {};
var loadedStyle  = {};
function Script(url) {
	return new Promise(function (resolve, reject) {
		if (loadedScript[url]) {
			return setTimeout(() => resolve(), 0);
		}

		let script,
		    loadCb  = () => {
			    loadedScript[url] = true;
			    resolve();
		    },
		    errorCb = reject;
		if ((script = loading[url])) {
			let lcb        = script.onload;
			let ecb        = script.onerror;
			script.onload  = () => {
				lcb();
				loadCb();
			};
			script.onerror = (e) => {
				ecb(e);
				errorCb();
			};
			return;
		}
		script         = document.createElement('script');
		script.async   = true;
		script.src     = url;
		script.type    = 'text/javascript';
		script.onload  = loadCb;
		script.onerror = errorCb;
		loading[url]   = script;
		document.body.appendChild(script);
	});
}

function Style(url) {
	return new Promise(function (resolve, reject) {
		if (loadedStyle[url]) {
			return setTimeout(() => resolve(), 0);
		}

		let link,
		    loadCb  = () => {
			    loadedStyle[url] = true;
			    resolve();
		    },
		    errorCb = reject;
		if ((link = loading[url])) {
			let lcb      = link.onload;
			let ecb      = link.onerror;
			link.onload  = () => {
				lcb();
				loadCb();
			};
			link.onerror = (e) => {
				ecb(e);
				errorCb();
			};
			return;
		}
		link         = document.createElement('link');
		link.async   = true;
		link.href    = url;
		link.rel     = "stylesheet";
		link.onload  = loadCb;
		link.onerror = errorCb;
		loading[url] = link;
		document.head.appendChild(link);
	});
}

export {Script as Script, Style as Style}