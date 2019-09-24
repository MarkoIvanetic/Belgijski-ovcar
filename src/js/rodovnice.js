function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', () => resolve(script), false);
        document.body.appendChild(script);
        script.onload = function() {
            resolve();
        };
    });
}

function changePedigree(name) {
    $('.tree-container .overlay').fadeIn(200, "linear");

    new Treant(getChartData(name), function() {
        $('.tree-container .overlay').fadeOut(200, "linear");
    });
}


window.addEventListener("load", function() {

    loadScript("https://code.jquery.com/jquery-3.4.1.min.js")
        .then(() => {

            $('.pedigree-picker li').click(function () {
                console.log($(this).data('dog'));
                changePedigree($(this).data('dog'));

                $('.pedigree-picker li.active').removeClass("active");
                $(this).addClass('active');
            })

            loadScript("../dist/vendor-min.js").then(response => {

                new Treant(getChartData("djanga"), function() {
                    $('.tree-container .overlay').fadeOut(200, "linear");
                    $('.tree-container').css("min-height", "unset");
                });

                $('.lightgallery').lightGallery({
                    mode: 'lg-slide',
                    speed: 200,
                    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    download: false
                });

            }, error => {

            });
            loadScript("../dist/custom.js");
        }, () => {

        });
})