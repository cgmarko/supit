$(document).ready(function () {
  var i = 0;
  var j = 0;
  var txt1 = "BUDI IZVRSTAN U ONOME ŠTO VOLIŠ...";
  var txt2 = "<br>";
  var txt3 = "ZAISKRI!";
  

  const typeWriter = function () {
    if (i < txt1.length) {
      $(".overlay > span > p").first().append(txt1.charAt(i++));
      if (i == txt1.length) {
        $("#serious > div > span").addClass("not-typing");
        setTimeout(typeWriter, 2000);
        setTimeout(() => {
          $("#serious > div > span").removeClass("not-typing");
        }, 2000);
        
      }
      else {setTimeout(typeWriter, 50);
      }
    } else if (i == txt1.length) {
      $(".overlay > span > p").first().append(txt2);
      i++;
      setTimeout(typeWriter, 50);
    } else {
      if (j < txt3.length) {
        $(".overlay > span > p").first().append(txt3.charAt(j++));
        setTimeout(typeWriter, 50);
      }
      else {
        $("#serious > div > span").addClass("not-typing");
      }
    }
  };
  typeWriter();
});
