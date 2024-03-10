// I got this code from w3schools I didn't want to learn jsavascript

    
function cow() {
    var x = document.getElementById("cow");
    var cowText = document.getElementById("cowText");
    var altText = document. getElementById("altText");

    
    if (x.style.display === "none") {
      x.style.display = "block";
      cowText.style.display="block";
      altText.style.display="none";
    } else {
      x.style.display = "none";    
      cowText.style.display="none";
      altText.style.display="block";
    }
  }