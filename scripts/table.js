

  $(document).ready(function () {
    if ($('#tableBody .ects').length == 0) {
      $('table').addClass("no-element")
      $('table').removeClass("has-element")
    }
    else {
      $('table').addClass("has-element")
      $('table').removeClass("no-element")

    }
    document.getElementById('input').addEventListener('change', function() {
     
        var value = this.value;
        var list = document.getElementById('list');
        var options = list.options;
        for (var i = 0; i < options.length; i++) {
          if (options[i].value == value) {
            this.value = options[i].text;
            break;
          }
        }
      });

  })

  $(document).on("change",'#input',function(e) {

    var value = this.value;
    var list = document.getElementById('list');
    var options = list.options;
    for (var i = 0; i < options.length; i++) {
      if (options[i].value == value) {
        this.value = options[i].text;
        break;
      }
    }
  });


  $(document).on("click",'#dodaj',function(e) {
    e.preventDefault()
    var kolegij = $('#input').val();
    if (kolegij != "") {
      var str = sessionStorage.getItem(kolegij);
      var id = parse(str, 1)
      var ects = parse(str, 2)
      var sati = parse(str, 3)
      var predavanja= parse(str, 4)
      var vjezbe= parse(str, 5)
      var tip= parse(str, 6)
  
      if(
        $(`option[value="${kolegij}"]:disabled`).text())
    {   $("input").val(null)
  
  
      throw new Error("already exist")
    }
      
      var html = '';
  
      html += '<tr>';
      html += '<td class="kolegij">' + kolegij + '</td>';
      html += '<td class="ects">' + ects + '</td>';
      html += '<td class="sati"> ' + sati + '</td>';
      html += '<td class="predavanja"> ' + predavanja + '</td>';
      html += '<td class="vjezbe"> ' + vjezbe + '</td>';
      html += '<td class="tip"> ' + tip + '</td>';
      html += `<td><button value="${kolegij}"><i class="fa-solid fa-x"></i></button></td>`;
      html += '</tr>'
  
      $('#tableBody').append(html);
      $(`option[value="${kolegij}"]`).prop('disabled', true);
      $("input").val(null)
      
      
    }
   
  })
  $(document).on("click",'td button:has(i)',function(e) {
    $(`option[value="${$(this).val()}"]`).prop('disabled', false);
    $(this).parent().parent().remove()
    

  })

  $(document).on("click",'#master-button',function(e) {
    $( "td button:has(i)" ).each(function() {
      $(`option[value="${$(this).val()}"]`).prop('disabled', false);
      $(this).parent().parent().remove()
    });
  })

  $(document).on("click",'button:has(i), #dodaj',function(e) {
   const ects = $("column-form tfoot > tr > td:nth-child(2)")
   const sati = $("column-form tfoot > tr > td:nth-child(3)")
    const predavanja =  $("column-form tfoot > tr > td:nth-child(4)")
    const vjezbe =  $("column-form tfoot > tr > td:nth-child(5)")
    let ectsVal = 0;
    let satiVal = 0;
    let predavanjaVal = 0;
    let vjezbeVal = 0;


    $( ".ects" ).each(function() {
      ectsVal += parseInt($( this ).text());
    });
    $( ".sati" ).each(function() {
      satiVal += parseInt($( this ).text());
    });
    $( ".predavanja" ).each(function() {
      predavanjaVal += parseInt($( this ).text());
    });
    $( ".vjezbe" ).each(function() {
      vjezbeVal += parseInt($( this ).text());
    });
    $(`tfoot > tr`).children().eq(1).text(ectsVal);
    $(`tfoot > tr`).children().eq(2).text(satiVal);
    $(`tfoot > tr`).children().eq(3).text(predavanjaVal);
    $(`tfoot > tr`).children().eq(4).text(vjezbeVal);

    if ($('#tableBody .ects').length == 0) {
      $('table').addClass("no-element")
      $('table').removeClass("has-element")
    }
    else {
      $('table').addClass("has-element")
      $('table').removeClass("no-element")

    }
  })

  function parse(str, index) {
      return str.split("|")[index]
  
  }
