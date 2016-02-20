$(document).ready(function() {
    var video_array = [{
        id: 'tCEMnKw6yUs',
        naslov: 'Od Slunja - Training#2 '
    }, {
        id: 'CRsXwCvnSZU',
        naslov: 'Od Slunja - Training'
    }, {
        id: 'kem7F7GX8BE',
        naslov: 'Od Slunja - Malinois training#1'
    }, {
        id: 'tSzB3N-tQdY',
        naslov: 'Od Slunja - Malinois training#2'
    }, {
        id: 'ondkah3hDBI',
        naslov: 'Od Slunja - Malinois training#3'
    }, {
        id: 'yGyfw8xiJ1Y',
        naslov: 'Od Slunja - Malinois training#4'
    },{
        id: 'zHVaOWm2Sc0',
        naslov: 'Od Slunja - Malinois training#5'
    }
    ];
    var videoW = 560;
    var videoH = 315;

    var reset = 1;
    var sizes = [0];

    $(window).on('resize', function() {
        reset = 1;
        console.log("Resize");
        console.log(reset);
    });
    //Keeps videos responsive
    function setAspectRatio() {
        jQuery('iframe').each(function() {
            jQuery(this).css('height', jQuery(this).width() * (videoH / videoW));
        });
    }
    setAspectRatio();
    jQuery(window).resize(setAspectRatio);

    //Initial video
    videoChange(video_array[0].id, 0);
    // Generating thumbnails
    $.each(video_array, function(index, value) {
        $(".video-thumbnail-container")
            .append('<div class="col-xxs-6 col-xs-6 col-sm-4 col-lg-3 video-thumbnail" video-id=' + value.id + '><img src="http://img.youtube.com/vi/' + value.id + '/hqdefault.jpg">' + '<div class="video-overlay"><p>' + value.naslov + '</p></div><h3>' + value.naslov + '</h3></div>');
    });
    //Thumbnail functionallity
    $(".video-thumbnail").click(function() {
        $('.video-thumbnail img').css("background-color", "black");
        jQuery(this).find('img').css("background-color", "rgba(215,37,35,1)");
        var videoID = jQuery(this).attr("video-id");
        videoChange(videoID, 1);
    })

    function videoChange(videoID, autoplay) {
        var source = 'https://www.youtube.com/embed/' + videoID + '?theme=light&showinfo=0&iv_load_policy=3&showsearch=0&rel=0'
        if (autoplay) source += "&autoplay=1";
        $('.video-main-video iframe').attr('src', source);
    }
    //Gallery
    if ($(".popup-galleryy").length) {
        // Dynamically generating images from files

        // SERVER SIDE ONLY, NOT LOCAL, DO NOT F****** DELETE **************************************

        


        $('.popup-gallery img').each(function() {
            if ($(this).width() > $(this).height()) {
                $(this).addClass('portait');
            } else $(this).addClass('landscape');
        });

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">Slika #%curr%</a> se ne može učitati.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>Nikola Paulić</small>';
                }
            }
        });
    }

    //scroll effect
    var nav_offset;

    $('a[href^="#"]').click(function() {
        $(window).width() < 1200 ? nav_offset = 90 : nav_offset = 0;
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - nav_offset
        }, 1000);
        return false;
    });

    // Bind to scroll
    $(window).scroll(function() {
        if (reset) {
            reset = 0;
            calculateSizes();
        };
        check();
        $(window).scrollTop();
    });

    function check() {
        //iterate through array
        for (var i = 0; i < sizes.length - 1; i++) {
            //check between which sizes current scroll position is
            if ($(window).scrollTop() >= sizes[i] && $(window).scrollTop() < sizes[i + 1]) {
                //if it doesnt have calss active
                if (!$("nav ul li:nth(" + i + ") a").hasClass('active')) {
                    //remove active from everybody
                    $("nav ul li a").removeClass('active');
                    $(".nav li a").removeClass('active');
                    //add active to certain link
                    $("nav ul li:nth(" + i + ") a").addClass('active');
                    $(".nav li:nth(" + i + ") a").addClass('active');
                }
            };
        };
    };

    function calculateSizes() {
        sizes = [0];
        $('.scrollMe').each(function(i) {
            //Half of screen height because area of section begins when its top reaches half screen
            sizes.push($(this).offset().top);
        });
        console.log(sizes);
    }



});
