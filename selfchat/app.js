function message() {
    var msg=document.getElementById("val");
    var para=document.createElement("p");
    var savemsg=document.createTextNode(val.value);
    para.appendChild(savemsg);
    console.log(savemsg);
    var chat=document.getElementById("chat");
    chat.appendChild(para);
    msg.value="";
}