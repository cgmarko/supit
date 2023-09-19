$(document).on("click",'#about a[href^="#"]',function(e) {

  
  e.preventDefault();
  var target = $( $(this).attr("href") );

  $("html,body").animate({
    scrollTop: target.offset().top
  },500);

});