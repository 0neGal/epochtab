var epochDiv = document.getElementById("epoch");
var clockDiv = document.getElementById("clock");
var contentDiv = document.getElementById("content");

var minutes;
var hours;
var seconds;

function init() {
    contentDiv.style.marginLeft = "-" + contentDiv.clientWidth / 2 + "px";
    contentDiv.style.marginTop = "-" + contentDiv.clientHeight / 2 + "px";
    setTimeout(() => {
        contentDiv.style.transform = "scale(1.0)";
        contentDiv.style.opacity = "1.0";
    }, 300)

    
}
setTimeout(() => {
    init();
}, 1500)

function epochStart() {
    epochDiv.innerHTML = (new Date).getTime();
}

function clock() {
    minutes = (new Date).getMinutes();
    hours = (new Date).getHours();
    seconds = (new Date).getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(() => {
    clock();
}, 1000)

setInterval(() => {
    epochStart();
}, 100)