var textArea = document.getElementById("text");
var checkBox = document.getElementById("ch");

function btnclick(){
    textArea.style.fontSize = "24pt";
}
function checkBoxClick(){
    if(checkBox.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "green";
    }else {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";
    }
}
function snoopify(){
    var str = textArea.value;
    str = str.toUpperCase().split(".").join("-izzle!");
    textArea.value = str;
}