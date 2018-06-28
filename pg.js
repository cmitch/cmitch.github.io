"use strict";


function createClassTable(subject="CS") {


}

function readFile(input) {

	return;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   alert(this.responseText);
   //  document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "test.txt", true);
  xhttp.send();
}
loadDoc();