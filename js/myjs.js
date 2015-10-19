$(document).ready(function() {
    var video_array = [{
        id: 'fLRWPpTnF3I',
        naslov: 'Title1 extremely wide title that cannot be read easely'
    },{
        id: 'ja2vYVgXu2c',
        naslov: 'Title2'
    },{
        id: 'ohnkNMFSnAc',
        naslov: 'Title3'
    },{
        id: '8VyL0SAVQ7s',
        naslov: 'Title4'
    }, {
        id: 'tUl7w4d1NBY',
        naslov: 'Title5'
    }];
    var videoW = 560;
    var videoH = 315;

    function setAspectRatio() {
        jQuery('iframe').each(function() {
            jQuery(this).css('height', jQuery(this).width() * (videoH / videoW));
        });
    }
    setAspectRatio();
    jQuery(window).resize(setAspectRatio);

    // Generating thumbnails

    $.each(video_array, function(index, value) {
        $(".video-thumbnail-container")
            .append('<div class="col-xs-6 col-sm-4 col-lg-3 video-thumbnail" video-id=' 
            	+ value.id + '><img src="http://img.youtube.com/vi/' 
            	+ value.id + '/hqdefault.jpg">' 
            	+ '<div class="video-overlay"><p>' 
            	+ value.naslov+'</p></div><h3>'+ value.naslov+'</h3></div>');
    });

    $(".video-thumbnail").click(function() {
    	$('.video-thumbnail img').css("background-color","black");
    	jQuery(this).find('img').css("background-color","rgba(215,37,35,1)");
        var videoID = jQuery(this).attr("video-id");
        $('.video-main-video iframe').attr('src', 'https://www.youtube.com/embed/' 
        	+ videoID 
        	+ '?theme=light&showinfo=0&iv_load_policy=3&showsearch=0&rel=0&autoplay=1')
    })
});

