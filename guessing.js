let audio=document.querySelector(".audioVideo");
let span=document.querySelectorAll("button");

span[0].addEventListener("click", higherLowerVolume1);
span[1].addEventListener("click", higherLowerVolume2);

function higherLowerVolume1() {
  
audio.volume -=0.1;

}

function higherLowerVolume2() {
  
audio.volume +=0.1;

}


let iframe=document.querySelector("#muting");


function stopVolume() {
  
iframe.src="none";


}

setTimeout(stopVolume, 500);

