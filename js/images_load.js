 $(function() {

     setTimeout(function() {
         $('.lazy').Lazy({
             // your configuration goes here
             scrollDirection: 'vertical',
             effect: 'fadeIn',
             threshold: 500,
             visibleOnly: true,
             onError: function(element) {
                 console.log('error loading ' + element.data('src'));
             }
         });
     }, 200)

 });
 $(window).load(function() {

     $('#loading').fadeOut(600);

     function generateImages(classGallery, folder, alt, extension, callback) {
         var dir = "images/photos/" + folder;
         var fileextension = ".jpg";
         $.ajax({
             //This will retrieve the contents of the folder if the folder is configured as 'browsable'
             url: dir,
             success: function(data) {
                 //List all .png file names in the page
                 $(data).find("a:contains(" + fileextension + ")").each(function() {
                     var filename = '/' + this.href.split("/").pop();
                     var popupImage = '<div class="col-lg-3 col-sm-4 col-xs-6 col-xxs-12 gallery-pad"><a class="col-xs-12 gallery-thumbnail" href="' + dir + filename + '" title="' + alt + " " + extension + '"><img class="lazy" src="images/blank.gif" data-src="' + dir + filename + '" alt="' + alt + '"></a></div>';
                     $("." + classGallery).append(popupImage);
                 });
                 $("img.lazy").Lazy({
                     // your configuration goes here
                     scrollDirection: 'vertical',
                     effect: 'fadeIn',
                     threshold: 500,
                     visibleOnly: true,
                     onError: function(element) {
                         console.log('error loading ' + element.data('src'));
                     }
                 });
             }
         });
     }

     $(".kontakt p:last-child").html("<span>mail:</span> nikolapaulic4@gmail.com");

     setTimeout(function() {
         generateImages("gero", "gero", "Gero - pas za parenje");
         generateImages("djanga", "djanga", "Djanga od Moslavine");
         generateImages("roki", "roki", "Roki Od Slunja");
         generateImages("ria", "ria", "Ria Od Slunja");
         generateImages("hed", "hed", "Hed od Slunja", "(Majka- Dina, Otac - Gero)");
         generateImages("rus", "rus", "Rus od Slunja", "(Majka- Djanga, Otac - Gero)");
         generateImages("rex", "rex", "Rex od Slunja", "(Majka- Djanga, Otac - Gero)");
         generateImages("laki", "laki", "Laki od Slunja", "(Majka- Dina, Otac - <a target='_blank' href='http://en.working-dog.eu/dogs-details/86104/Conan-van-Karlosha'>Conan von Karlosha</a>)");
     }, 500);

 });