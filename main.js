var item = [];
function sm(){
    var tempitem = document.getElementById("ti").value;
    item.push(tempitem + "<br>");
    document.getElementById("displaydiv").innerHTML = item.join(" ");
}