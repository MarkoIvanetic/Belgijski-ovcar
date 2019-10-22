function loadScript(url) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.addEventListener('load', () => {
            resolve();
        });

        document.body.appendChild(script);
    });

}

async function loadScriptArray(scriptArr, callback) {
	  for (const script of scriptArr) {
	    await loadScript(script);
	  }

    callback();
}


function debounce(func) {
    var timer;
    return function(event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}

