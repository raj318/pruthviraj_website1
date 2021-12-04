
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
   if (value  > 5 && page ==2 ){
       page = 1;
       // move up
       move_top_bars(0, 2);
       move_bottom_bars(0, 2);
       document.getElementById('pagename').innerHTML = "ABOUT ME";
       document.getElementById("temp").innerHTML = document.getElementById("int").innerHTML;
       clearInterval(movetopup);
   }else if (value < -5 && page ==1 ){
       page = 2;
       // move down
       move_top_bars(1, 2);
       move_bottom_bars(1, 2);
       document.getElementById('pagename').innerHTML = "EXPERIENCE";
       document.getElementById("temp").innerHTML = document.getElementById("experi").innerHTML;
       clearInterval(movetopdown);
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


function topstarter() {
    count = 1;
    base_height = 3;
    base_width = 1;
    for(let i = 0;i<16;i++){
        var ele = document.getElementById('bar');
        var clone = ele.cloneNode(true);

        clone.style.top =  20*i;
        clone.id = "tbar"+ count;
        clone.style.position= "relative";
        clone.style.width = "40px";
        clone.style.height = base_height + 0.5*i;
        clone.style.transition = "0.1s";
        clone.style.margin = "auto 15px";
        clone.style.backgroundColor = "black";

        document.getElementById('topbar').appendChild(clone);
        count += 1
    }
    //var run_every_sec = setInterval(move_top_bars,700);
}

function get_bar_element(index){
    var ele = document.getElementById('bar');
    var clone = ele.cloneNode(true);
    
    clone.style.top =  20*index;
    clone.style.position= "relative";
    clone.style.width = "40px";
    clone.style.height = "10px";
    clone.style.transition = "0.1s";
    clone.style.margin = "auto 15px";
    clone.style.top = "300px";
    clone.style.backgroundColor = "black";

    return clone;
}

function move_top_bars(go_up, loops){
    for(let j=0;j<loops;j++){
    for(let i = 1;i<17;i++){
        nid = "tbar";
        nid += i;
        var element = document.getElementById(nid);
        top_pix = parseFloat(element.style.top.replace("px", ""));
        height_pix = parseFloat(element.style.height.replace("px", ""));
        if (go_up){ // goes up
            if (top_pix > 0 ){
                element.style.top = top_pix-20;
                element.style.height = height_pix-0.5;
            }else{
                element.remove();
                new_ele = get_bar_element(i);
                new_ele.id = nid;
                new_ele.style.top = "300px";
                new_ele.style.height = "10px";
                document.getElementById('topbar').appendChild(new_ele);
            }
        }else { // goes down
            if (top_pix > 280 ){
                element.remove();
                new_ele = get_bar_element(i);
                new_ele.id = nid;
                new_ele.style.top = "-3px";
                new_ele.style.height = "3px";
                document.getElementById('topbar').prepend(new_ele);
            }else{
                element.style.top = top_pix+20;
                element.style.height = height_pix+0.5;
            }
        }
    }
    }
}


function bottomstarter() {
    count = 1;
    base_height = 10;
    base_width = 1;
    top = 0;
    for(let i = -1;i<15;i++){
        var ele = document.getElementById('bar');
        var clone = ele.cloneNode(true);

        clone.style.top =   20*i;
        top = clone.style.top;
        clone.id = "bbar"+ count;
        clone.style.position= "relative";
        clone.style.width = "40px";
        clone.style.height = base_height - 0.5*i;
        clone.style.transition = "0.1s";
        clone.style.margin = "auto 15px";
        clone.style.backgroundColor = "black";

        document.getElementById('bottombar').appendChild(clone);
        count += 1
    }
    //var run_every_sec = setInterval(move_bottom_bars,700);
}

function move_bottom_bars(go_up, loops){
    for(let j=0;j<loops;j++){
    for(let i = 16;i>0;i--){
        nid = "bbar";
        nid += i;
        var element = document.getElementById(nid);
        top_pix = parseFloat(element.style.top.replace("px", ""));
        height_pix = parseFloat(element.style.height.replace("px", ""));
        if (go_up){// goes up
            if (top_pix > -20){
                element.style.top = top_pix-20;
                element.style.height = height_pix+0.5;
            }else{
                element.remove();
                new_ele = get_bar_element(i);
                new_ele.id = nid;
                new_ele.style.top = "280px";
                new_ele.style.height = "1.5px";
                document.getElementById('bottombar').appendChild(new_ele);
            }
        }else{ // goes down
            if (top_pix >= 280){
                element.remove();
                new_ele = get_bar_element(i);
                new_ele.id = nid;
                new_ele.style.top = "-20px";
                new_ele.style.height = "10px";
                document.getElementById('bottombar').prepend(new_ele);
            }else{
                element.style.top = top_pix+20;
                element.style.height = height_pix-0.5;
            }
        }
    }
    }
}

function setfirst() {
    set_content(1);
    setcompany('cione');
    topstarter();
    bottomstarter();
}