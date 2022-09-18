const main = document.querySelector('.main');
const loader = document.querySelector('.loader');
const p=document.getElementById("rk");
const hero = document.querySelector('.hero');
const about = document.querySelector('.about');
const education = document.querySelector('.education');
const thanks = document.querySelector('.thanks');

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

main.addEventListener('scroll', function(){
    var value = main.scrollTop;
    console.log(value);
    if (value>0 && value<350){
        let y = -value/350 + 1;
        hero.style.opacity=`${(y)}`;    
    }
    else if (value>=734 && value <1133){
        let y = -value/4 + 300;
        about.style.opacity=`${(y/100)}`;  
    }
    else if (value>=1468 && value <=2202){
        let y = -value/4 + 500;
        education.style.opacity=`${(y/100)}`;  

        let y1 = value/734 - (1468/734);
        thanks.style.opacity=`${(y1)}`;  
    }

    

})
