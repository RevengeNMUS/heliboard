var SUS = 167;
var AMOGUS = 35;

var sus = document.getElementsByClassName("baloon");
const viewportWidth = window.innerWidth;

const lookers = ["green", "red", "blue"];
for (const j of sus) {
    j.setAttribute("data-baloon-color", lookers[Math.trunc(Math.random() * 3)]);
}

var maxnum = 0;

for (const j of sus) {
    j.style.left = ((Math.random()) * (window.innerWidth/2) + (window.innerWidth/5)) + 'px';
    maxnum = Math.max(maxnum, j.getAttribute("data-num"));
}

for (const j of sus) {
    if (j.getAttribute("data-num") == maxnum) {
        j.setAttribute("data-baloon-color", "gold");
    }
    j.style.top = (maxnum + SUS) + 'px';
    j.textContent = j.textContent + " - " + j.getAttribute("data-num");
}

(document.getElementById("ground")).style.top = (SUS + maxnum + AMOGUS) + 'px';
(document.getElementById("ground")).style.left = 0 + 'px';

setTimeout(() => {
    for (const j of sus) {
        j.style.top = (maxnum - j.getAttribute("data-num") + SUS) + 'px';
    }
}, 1000);