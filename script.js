const main = document.querySelector('.main');
const loader = document.querySelector('.loader');
const p=document.getElementById("rk");

window.onload = function(){
    loader.style.animation="";
    loader.style.display="none";
    p.style.animation="typing 3s steps(20),blink-caret .75s step-end infinite";
    // main.style.display="initial";
};
