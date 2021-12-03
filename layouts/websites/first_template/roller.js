
function starter() {
    count = 1;
    base_height = 1;
    base_width = 1;
    for(let i = 0;i<16;i++){
        var ele = document.getElementById('bar');
        var clone = ele.cloneNode(true);

        clone.style.top =  20*i;
        clone.id += count;
        clone.style.position= "relative";
        clone.style.width = "80px";
        clone.style.height = base_height + 0.5*i;
        clone.style.transition = "0.5s";
        clone.style.margin = "auto";
        clone.style.backgroundColor = "black";

        document.getElementById('divi').appendChild(clone);
        count += 1
    }
    var run_every_sec = setInterval(move_bars,700);
}

function get_int_value(pix){
    return parseInt(pix.replace("px", ""));
}

function get_bar_element(index){
    var ele = document.getElementById('bar');
    var clone = ele.cloneNode(true);
    
    clone.id = "bar";
    clone.style.top =  20*index;
    clone.id += index;
    clone.style.position= "relative";
    clone.style.width = "80px";
    clone.style.height = "10px";
    clone.style.transition = "0.5s";
    clone.style.margin = "auto";
    clone.style.top = "300px";
    clone.style.backgroundColor = "black";

    return clone;
}

function move_bars(){
    for(let i = 1;i<17;i++){
        nid = "bar";
        nid += i;
        var element = document.getElementById(nid);
        top_pix = parseFloat(element.style.top.replace("px", ""));
        height_pix = parseFloat(element.style.height.replace("px", ""));
        if (top_pix > 0 ){
            element.style.top = top_pix-20;
            element.style.height = height_pix-0.5;

        }else{
            element.remove();
            new_ele = get_bar_element(i);
            new_ele.style.top = "300px";
            new_ele.style.height = "10px";
            document.getElementById('divi').appendChild(new_ele);
        }
    }
}