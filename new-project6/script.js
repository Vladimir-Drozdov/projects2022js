let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction(this.responseText)
      console.log(1);
   }
}

xhttp.open("GET", "http://vin2009x.beget.tech/sendmail.php", true);
xhttp.send();


function myFunction(data) {
   console.log(data);
}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction2(this.responseText)
   }
}


xhttp2.open("POST", "http://vin2009x.beget.tech/", true);

xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('555');

function myFunction2(data) {
   console.log('POST');
   console.log(data);
}



