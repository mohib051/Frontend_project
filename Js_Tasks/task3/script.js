//to stop form to reload while submitting , we will use prevent default().

var form = document.querySelector("form");
var inp1 = document.querySelector("#name")
var inp2 = document.querySelector("#aadr")
var h1 = document.querySelector("h1");


form.addEventListener("submit", function (evntrcv) { // here,submit event already occured so we rcevievd the value in function.
    evntrcv.preventDefault();

    if (inp1.value === "" || inp2.value === "") {
        h1.textContent = "error, fill all box";
    }
    else {
        h1.textContent = " ";
    }

})


//  if we have multiple inputs ,then from above method we have to select input mutiple times , which is time consuming.
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    
    inps.forEach(function(inp){
        if (inp.value === '') {
            h4.textContent = 'Error, some fields are blank.';
            h4.style.color = "red";
        }
        else {
            h4.textContent ="";
            h4.style.color = "black";
        }
    })
})


// there was a problem in above code, it fails to give correct result for the second input..

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    
    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim() ==="" ) {
         h4.textContent = "Error, some fields are blank";
        h4.style.color = "red";
        break;
        }
    }   
})
