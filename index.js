$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top -100
      }, 750 );

      /*var target = $(this.hash)
      if (target == $('#contact')){
        $('.portfolio').css('opacity', '0');
      }*/
      
})
})