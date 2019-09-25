function changePedigree(name) {
    $('.tree-container .overlay').fadeIn(200, "linear");

    new Treant(getChartData(name), function () {
        $('.tree-container .overlay').fadeOut(200, "linear");
    });
}


window.addEventListener("load", function () {

    await loadScript("https://code.jquery.com/jquery-3.4.1.min.js")

            $('.pedigree-picker li').click(function () {
                console.log($(this).data('dog'));
                changePedigree($(this).data('dog'));

                $('.pedigree-picker li.active').removeClass("active");
                $(this).addClass('active');
            })

    await  loadScript("../dist/vendor-min.js")

                new Treant(getChartData("djanga"), function () {
                    $('.tree-container .overlay').fadeOut(200, "linear");
                    $('.tree-container').css("min-height", "unset");
                });

                $('.lightgallery').lightGallery({
                    mode: 'lg-slide',
                    speed: 200,
                    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    download: false
                });


    await loadScript("../dist/custom.js");

})
