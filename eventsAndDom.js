
function headerStyleChange() {
    const header = document.getElementById("header");
    header.innerHTML = " this is from javascript data!";
    header.style.color = "red";
    header.style.backgroundcolor = "green";
    header.style.fontSize = "10px";
}

function changeFontSize(pixel) {
    const header = document.getElementById("header");
    header.style.fontSize = pixel + "px";
}

let button1 = document.getElementById("onClick");
let button2 = document.getElementById("onMouseOver");
let button3 = document.getElementById("onWheel");
let button4 = document.getElementById("onMouseLeave");
let button5 = document.getElementById("onAuxClick");

button1.onclick = function () {
    alert("you click on me ");
}
button2.onMouseOver = function () {
    alert("you hover over me");
}
button3.onWheel = function () {
    alert("don't overroll me");
}
button4.onMouseLeave = function () {
    alert("don't leave me");
}
//button5.onAuxClick = function () {
//alert("")

//}
let outputField = document.getElementById("inputField");
function showInputValue() {
    console.log(document.getElementById("inputField").value);
}