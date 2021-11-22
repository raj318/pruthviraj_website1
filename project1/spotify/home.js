function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "https://api.spotify.com/v1/authorize?", true);
    xhttp.open("GET", "https://api.spotify.com/v1/albums", true);
    xhttp.open("GET", "https://api.spotify.com/v1/albums", true);
    xhttp.send();
    console.log("testing")
  }