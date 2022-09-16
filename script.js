const main = document.querySelector('.main');
const loader = document.querySelector('.loader');
const p=document.getElementById("rk");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// setTimeout(() => {  console.log("World!"); }, 5000);
window.onload = function(){
    sleep(1000).then(()=>{
        loader.style.display="none";
        p.style.animation="typing 3s steps(20),blink-caret .75s step-end infinite";
        main.style.overflow="scroll";
    })
    
};
