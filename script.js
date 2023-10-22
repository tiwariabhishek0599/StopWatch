let timerdisplay=document.querySelector(".timerDisplay")
let start=document.querySelector("#start_btn");
let stop=document.querySelector("#stop_btn");
let reset=document.querySelector("#reset_btn");

let msec=0;
let sec=0;
let min=0;
let hr=0;

let timer=null;
start.addEventListener("click",function(){
   
    if(timer!==null){
        clearInterval(timerid)
    }
    timer=setInterval(startTimer,100);
});

stop.addEventListener("click",function(){
   
    clearInterval(timer);
});

reset.addEventListener("click",function(){
   
    clearInterval(timer);
    timerdisplay.innerHTML='00 : 00 : 00 : 00';
    msec = sec = min =hr =0;
});


function startTimer(){
    msec++;
    if(msec>=10){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
            if(min==60){
                min=0;
                hr++;
            }
        }
        
    }
    let msecString;
    if(msec<10){
        msecString=`0${msec}`
    }
    else{
        msecString=msec;
    }
    let secString;
    if(sec<10){
        secString=`0${sec}`
    }
    else{
        secString=sec;
    }

    let minString;
    if(min<10){
        minString=`0${min}`
    }
    else{
        minString=min;
    }
    let hrString;
    if(hr<10){
        hrString=`0${hr}`
    }
    else{
        hrString=hr;
    }
    timerdisplay.innerHTML= `${hrString} : ${minString} : ${secString} : ${msecString}`

}