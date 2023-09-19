$(document).ready(function () {
    /* Hide all elements outside the visible window */
    $('div[class*="col-"]').each(function () {
        $(this).addClass("hideme")
        $(".hideme").each(function (i) {
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
    
          if (bottom_of_window - bottom_of_object > - 500) {
            $(this).addClass("scrolled")
            $(this).removeClass("hideme");
          }
        });
        
    });
    
    /* Every time the window is scrolled ... */
    $(window).on("scroll", function () {
      /* Check the location of the desired elements */
      $(".hideme").each(function (i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window - bottom_of_object > - 500) {
          $(this).addClass("scrolled")
          $(this).removeClass("hideme");
        }
      });
  
      $(".scrolled").each(function (i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
      

      });
    });
  });
  