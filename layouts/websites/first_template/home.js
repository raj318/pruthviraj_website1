
const idlist = ['cione', 'citwo', 'cithree'];

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

function setfirst() {
    setcompany('cione');
}