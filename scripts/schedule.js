$(document).ready(function () {



  const token = sessionStorage.getItem("token");

  var url = "https://www.fulek.com/data/api/supit/curriculum-list/hr";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let html;
      const jsonObj = JSON.parse(xhr.responseText);
    let multiArray = [];
    let singleArray;
      jsonObj["data"].forEach((element) => {
        singleArray = [element["kolegij"] ,element["kolegij"] + "|" +
             element["id"]+ "|" +
            element["ects"]+ "|" +
             element["sati"]+ "|" +
             element["predavanja"]+ "|" +
            element["vjezbe"]+ "|" +
            element["tip"]+ "|" +
            element["semestar"]
        ];
        multiArray.push(singleArray)
       
        html += `<option  value="${element["kolegij"]}"><label>${element["kolegij"]}</label></option>`



      });
      multiArray.sort(function(a, b) {
        return a - b;
    })
    $("#list").html(html)
    
    multiArray.forEach(element => {
        
        sessionStorage.setItem(element[0], element[1])
       
   
    });
    
    }
  };

  xhr.send();

  
});


 