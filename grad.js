// function myDrop() {
//     var x=document.getElementById("links").innerHTML
// }
//  function myDrop() {
//         var newText=document.getElementById("demo").innerHTML="WELCOME HERE"
        
//      }
// function myDrop () {
//     var data="<label>WHAT WE DO</label><br><label>WHO ARE WE?</label><br><label>HOW ITS WORK?</label><br><label> EXTERNAL LINKS?</label><br>"
//     document.getElementById("demo").innerHTML=data
// }
// function myDrop () {
//     var showText=document.getElementById("demo").innerHTML="welcome"
// }
function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  