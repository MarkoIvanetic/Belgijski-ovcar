function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', () => resolve(script), false);
        document.body.appendChild(script);
        script.onload = function () {
            resolve();
        };
    });
}