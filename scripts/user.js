$(document).ready(function () {
    if (
        sessionStorage.getItem("username") != null) 
        {$("#user").css("display", "flex")
        $("#schedule").css("visibility", "visible")
        $("#user > a > span").append(sessionStorage.getItem("username")+" ")
        $("#login").css("display", "none")
        $("#menu li:has(.logout)").css("display", "block")

    }
    else {
        $("#login").css("display", "flex")
        $("#user").css("display", "none")
        $("#schedule").css("visibility", "hidden")
        $("#menu li:has(.logout)").css("display", "none")
        $("#menu li:has(.schedule)").css("display", "none")
        
    }

    });
    
    $(document).on("click",'.logout',function(f) {

        f.preventDefault();
        sessionStorage.clear();
        window.location.href = "/";

      
      });    