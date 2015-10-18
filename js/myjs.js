$(document).ready(function(){
	var videoW = 560;
	var videoH = 315;

    function setAspectRatio() {
      jQuery('iframe').each(function() {
        jQuery(this).css('height', jQuery(this).width() * (videoH/videoW));
      });
    }

    setAspectRatio();   
    jQuery(window).resize(setAspectRatio);

});

