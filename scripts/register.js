
$(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault();
  
      const uname = $("input[name='uname']").val();
      const psw = $("input[name='psw']").val();
      const data = {
        username: uname,
        password: psw,
      };
      $.ajax({
        type: "POST",
        url: "https://www.fulek.com/data/api/user/register",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (response) {
          console.log("Success:", response, data);
          window.location.href = "/login/";
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });
    });
  });
  