function loadScript(url, callback) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', () => {
            callback();
        });
        document.body.appendChild(script);
}
