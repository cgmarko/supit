let t1 = null;
let t2 = null;

$(document).on("mouseenter", ".nav-bar > #about", function () {
  $(this).children(".dropdown").removeClass("hide");
  $(this).children(".dropdown").addClass("show");
  $(this).children(".dropdown").css("display", "block");
});

$(document).on("mouseleave", ".nav-bar > #about", function () {
  t1 = setTimeout(function () {
    $(".nav-bar > #about").children(".dropdown").removeClass("show");
    $(".nav-bar > #about").children(".dropdown").addClass("hide");
  }, 200);

  t2 = setTimeout(function () {
    $(".nav-bar > #about").children(".dropdown").css("display", "none");
  }, 700);

  $(document).on("mouseenter", ".nav-bar > #about", function () {
    if (t1 != null) {
      clearTimeout(t1);
    }
    if (t2 != null) {
      clearTimeout(t2);
    }
  });
});

let t3 = null;
let t4 = null;

$(document).on("mouseenter", "#user", function () {
  $(this).children(".dropdown").removeClass("hide");
  $(this).children(".dropdown").addClass("show");
  $(this).children(".dropdown").css("display", "block");
});

$(document).on("mouseleave", "#user", function () {
  t3 = setTimeout(function () {
    $("#user").children(".dropdown").removeClass("show");
    $("#user").children(".dropdown").addClass("hide");
  }, 200);

  t4 = setTimeout(function () {
    $("#user").children(".dropdown").css("display", "none");
  }, 700);

  $(document).on("mouseenter", "#user", function () {
    if (t3 != null) {
      clearTimeout(t3);
    }
    if (t4 != null) {
      clearTimeout(t4);
    }
  });
});

$(document).ready(function () {
  $(".dropdown#menu").addClass("hide");

});

$(document).on("click", "#menu", function () {
  if ($(this).children().hasClass("show")) {
    $("#menu > a > i").removeClass('fa-xmark')
    $("#menu > a > i").addClass('fa-bars')
   
   
    $("#menu").children(".dropdown").removeClass("show");
    $("#menu").children(".dropdown").addClass("hide");
    
  } else {
    

    $("#menu > a > i").removeClass('fa-bars')
    $("#menu > a > i").addClass('fa-xmark')
    $(this).children(".dropdown").removeClass("hide");
    $(this).children(".dropdown").addClass("show");
 
  }
});
