$(document).ready(function () {
    $("form").on("submit", function (event) {
      event.preventDefault();
  
      const uname = $("input[name='uname']").val();
      const psw = $("input[name='psw']").val();
      const data = {
        username: uname,
        password: psw,
      };
    
      $.ajax({
        type: "POST",
        url: "https://www.fulek.com/data/api/user/login",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (response) {
          console.log("Success:", response);
          
          if (response.statusCode === 200) {
            sessionStorage.setItem("username", response["data"]["username"]);
            sessionStorage.setItem("token", response["data"]["token"]);
            
            
            $("#msg").text("Uspješna prijava :) Na početnu stranicu 3, 2, 1...");
            setTimeout(function () {
            $(location).attr("href", "/");
           }, 3000);
          } else {
            $("#msg").text("Ne postoji korisnik s unesenim podacima.");
          }
        },
        error: function (error) {
          console.error(error);
        },
      });
    });
  });
  