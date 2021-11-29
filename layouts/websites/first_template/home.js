
const idlist = ['cione', 'citwo', 'cithree'];
var page = 1;

function setcompany(id) {

    for(var i =0;i<idlist.length;i++){
        if (idlist[i] != id){
            document.getElementById(idlist[i]).style.color = "white";
            document.getElementById(idlist[i]).style.backgroundColor = "black";
        }
    }
    document.getElementById(id).style.color = "black";
    document.getElementById(id).style.backgroundColor = "white";
    if(id == "cione") {
        document.getElementById('cname').innerHTML = "Engineer&nbsp;@&nbsp;Upstatement";
        document.getElementById('tim').innerHTML = "Aug 2021 - Present";
    }else if(id == 'citwo') {
        document.getElementById('cname').innerHTML = "Engineer&nbsp;@&nbsp;Synopsys";
        document.getElementById('tim').innerHTML = "Jan 2018 - July 2021";
    }else if(id =="cithree") {
        document.getElementById('cname').innerHTML = "Engineer&nbsp;@&nbsp;factset";
        document.getElementById('tim').innerHTML = "Mar 2015 - Jan 2018";
    }

}

var lastScrollTop = 0;

//window.addEventListener("wheel", scroll(), false);
window.addEventListener("wheel", function scroll(e){ // or window.addEventListener("scroll"....
   var oldVal = parseInt(document.getElementById("body").style.transform.replace("translateY(","").replace("px)",""))

   var variation = parseInt(e.deltaY);

   var value =   oldVal - variation;
    //console.log(value);
   if (value  > 5 && page ==2 ) {
       page = 1;
       document.getElementById('pagename').innerHTML = "ABOUT ME";
       document.getElementById("temp").innerHTML = document.getElementById("int").innerHTML;
   }else if (value < -5 && page ==1 ){
       page = 2;
       document.getElementById('pagename').innerHTML = "EXPERIENCE";
       document.getElementById("temp").innerHTML = document.getElementById("experi").innerHTML;
       
   }
    lastScrollTop = value;

}, false);

function set_content(page){
    if (page ==1 ){
        document.getElementById('pagename').innerHTML = "ABOUT ME";
        document.getElementById("temp").innerHTML = document.getElementById("int").innerHTML;
    }else if (page == 2){
        document.getElementById('pagename').innerHTML = "EXPERIENCE";
        document.getElementById("temp").innerHTML = document.getElementById("experi").innerHTML;
    }
}

function setfirst() {
    set_content(1);
    setcompany('cione');
}