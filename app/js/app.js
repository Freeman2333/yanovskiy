$(document).ready(function() {
  function detectActiveSection() {
    var youtubeY = $('.youtube-s').offset().top
    var windowY = $(window).scrollTop()
    if (windowY > youtubeY) {
        $(".right-nav").addClass("active")
    } else{
    	$(".right-nav").removeClass("active")
    }
  }

  detectActiveSection();
  $(window).scroll(function () {
			detectActiveSection();
		})

  $(".yotube-btn").on("click", function (event) {
    event.preventDefault();
    var top = $('.youtube-frame').offset().top;
    $('body,html').animate({scrollTop: top}, 900);
  });

})