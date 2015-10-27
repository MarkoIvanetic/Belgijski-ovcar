$(document).ready(function() {
    var video_array = [{
        id: 'ja2vYVgXu2c',
        naslov: 'Title1 extremely wide title that cannot be read easely'
    }, {
        id: 'fLRWPpTnF3I',
        naslov: 'Title2'
    }, {
        id: 'ohnkNMFSnAc',
        naslov: 'Title3'
    }, {
        id: '8VyL0SAVQ7s',
        naslov: 'Title4'
    }, {
        id: 'tUl7w4d1NBY',
        naslov: 'Title5'
    }];
    var videoW = 560;
    var videoH = 315;
    //Keeps videos responsive
    function setAspectRatio() {
        jQuery('iframe').each(function() {
            jQuery(this).css('height', jQuery(this).width() * (videoH / videoW));
        });
    }
    setAspectRatio();
    jQuery(window).resize(setAspectRatio);
    //DOG STATS
    var dog_stats = [
        {osobina:'Inteligencija',ocjena:5},
        {osobina:'Emocije',ocjena:5},
        {osobina:'Njeznost',ocjena:8},
        {osobina:'Poza',ocjena:5},
        {osobina:'Lajanje',ocjena:5},
        {osobina:'Inteligencija',ocjena:4},
        {osobina:'Inteligencija',ocjena:5},
        {osobina:'Inteligencija',ocjena:5},
        {osobina:'Inteligencija',ocjena:5},
        {osobina:'Pamčenje',ocjena:5.5}
    ];

    $.each(dog_stats, function(index, value) {
    $(".article-stats-rating")
        .append('<div class="article-stats-property col-xs-12">'+
            '<h3 class="col-xxs-12 col-xs-4">' + value.osobina + '</h3>'+
            '<div data-rating=' + value.ocjena + ' class="col-xxs-12 col-xs-8 rating-square-container">'+
            '</div></div>'
            );
    });
        $('.rating-square-container').each(function(){
        var temp_ocjena = $(this).attr('data-rating');
        for (var i = 0; i < 10; i++) {
            $(this).append('<div class="rating-square col-xxs-1 col-xs-1"></div>');
        }
        $(this).children('.rating-square').each(function(){
                if (temp_ocjena > 1) {
                    $(this).addClass('rating-full');
                    temp_ocjena--;
                } else if (temp_ocjena > 0 && temp_ocjena < 1){
                    $(this).addClass('rating-half');
                    temp_ocjena--;
                }
                 
            });
        });
    //Initial video
     videoChange(video_array[0].id,0);
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
        videoChange(videoID,1);
    })
    function videoChange (videoID, autoplay) {
        var source = 'https://www.youtube.com/embed/' + videoID + '?theme=light&showinfo=0&iv_load_policy=3&showsearch=0&rel=0'
        if (autoplay) source+="&autoplay=1";
        $('.video-main-video iframe').attr('src', source);
    }
    //Gallery
if ( $( ".popup-gallery" ).length ) {
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
                return item.el.attr('title') + '<small>Nikola Paunović</small>';
            }
        }
    });
}

});