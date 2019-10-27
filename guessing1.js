let gaming1=document.querySelector(".gaming");

let orange=[

0,11,45,74,83,106

];

let purple=[

6,18,30,46,61,69,75,88,97,112

];

let green=[

1,19,27,45,54,66,74,80,85,92,99,101,107,113

];

let red=[

2,13,17,22,26,33,47,50,55,
59,61,65,74,82,91,96,100,109

];

let yellow=[

3,15,
20,23,24,25,26,41,45,52,
61,64,67,70,73,77,79,94,95,
102,105,112
];

let blue=[

3,51,101 

];

let black=[

17,47,87

];

let pink=[

18,64,84,99 


];

let brown=[

10,44,50,72,90,101

];

let red1=[

9,39,48,60,71,82 

];

let orange1=[

1,4,14,24,44,74,104,112

];

let yellow1=[

2,27,34,55,69,80,90,100


];

let white=[

8,15,35,50,60,75,85,95,105,110

];

let purple1=[

4,15,21,28,39,47,56,67,74,79,88,92,98,105,111

];

let gray=[

8,13,31,50,62,75,90

];

let red2=[

2,26

];

let orange2=[

57,85

];

let yellow2=[

40,70

];

let blue3=[

5,67,75

];

let green3=[

14,32,90

];

let black3=[

26,49,81,113

];

let pink3=[

1,3,4,6,7

];

let brown3=[

11,22,35,48,59

];

let white3=[

40,70,90,105

];

let red4=[

18,37,56,75,94,110

];

let gray4=[

2,25,35,40,80,90

];

let green4=[

11,51,61,101,102,103

];

let red44=[

1,3,5,7,9,11

];

let gray44=[

22,24,26,28,30,32

];

let green44=[

40,51,62,73,84,95

];

let yellow44=[

14,24,30,40,54,64,70

];

let black44=[

1,22,33,44,55,66,77

];

let brown44=[

15,25,35,81,92,99,104,112

];

let purple55=[

5,81

];

let red55=[

12,76

];

let green55=[

35

];

let gray55=[

50

];

let green66=[

0,19,38

];

let blue66=[

24,54,84

];

let yellow66=[

31,61

];

let black66=[

42,72

];

let red77=[

1,10

];

let white77=[

28,37,49,80,95

];

let brown77=[

16,31,62

];

let pink77=[

5,12,71,108

];

let black88=[

9,23,29,33,46,59

];

let green88=[

1,62,94,108

];

let purple88=[

3,14,71,86,111

];

let gray88=[

6,26,90

];

let blue99=[

6,31,54,78,112

];

let yellow99=[

13,46,82,99,102,108

];

let pink99=[

17,25,63,76,92,100,105

];

let white99=[

3,15,67,70

];

for(let i=0; i < 114; ++i)  {

let square=document.createElement("div");
square.id="cube1";
gaming1.appendChild(square);

}

let cubing=document.querySelectorAll("#cube1");

for(let i=0; i < orange.length; ++i)  {

cubing[orange[i]].style.background="#FBBC05";


}

let timer=document.querySelector(".secondTime");
let time;
let newStart;
let timing;
let ice;
let ice1;
let ice2;
let ice3;
let ice4;
let ice5;
let ice6;
let ice7;
let ice8;
let ice9;
let ice10;
let ice11;
let ice12;
let ice13;
let ice14;
let ice15;
let ice16;
let ice17;
let ice18;
let ice19;
let ice20;
let ice21;
let ice22;
let ice23;
let ice24;
let ice25;
let ice26;
let ice27;
let ice28;
let ice29;
let ice30;
let ice31;
let ice32;
let ice33;
let ice34;
let ice35;


let back=document.querySelector(".goBack");

back.addEventListener("click", loadingLevel);

function loadingLevel() {
	
	location=document.URL;


}

function playAgain() {
	
back.textContent="Click to play again";

}


function stopawtch() {
	
timer.textContent -=1;

if(timer.textContent < 1) {

clearInterval(time);
time=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    } 

setTimeout(playAgain, 2000);    

  }

if(timer.textContent < 10) {

$(timer).prepend(0);

 }


}


time=setInterval(stopawtch, 1000);

let winning=document.querySelector(".winner");
let secondLevel=document.querySelector("h2");

winning.addEventListener("keydown", gameOver);

function gameOver(event) {
	
if(event.keyCode===13 && winning.value==="6 orange" && secondLevel.textContent==="Count orange squares")  {

clearInterval(time);
time=null;
winning.readOnly=true;
newStart=setTimeout(newLevel1, 1000);
timing=setInterval(startNewLevel1, 1000);

   }

if(event.keyCode===13 && winning.value==="10 purple" && secondLevel.textContent==="Count purple squares")  {

clearInterval(timing);
timing=null;
winning.readOnly=true;
ice=setTimeout(newLevel2, 1000);
ice1=setInterval(startNewLevel2, 1000);

   }

if(event.keyCode===13 && winning.value==="14 green" && secondLevel.textContent==="Count green squares")  {

clearInterval(ice1);
ice1=null;
winning.readOnly=true;
ice2=setTimeout(newLevel3, 1000);
ice3=setInterval(startNewLevel3, 1000);

} 

if(event.keyCode===13 && winning.value==="18 red" && secondLevel.textContent==="Count red squares")  {

clearInterval(ice3);
ice3=null;
winning.readOnly=true;
ice4=setTimeout(newLevel4, 1000);
ice5=setInterval(startNewLevel4, 1000);

 }

if(event.keyCode===13 && winning.value==="22 yellow" && secondLevel.textContent==="Count yellow squares")  {

clearInterval(ice5);
ice5=null;
winning.readOnly=true;
ice6=setTimeout(newLevel5, 1000);
ice7=setInterval(startNewLevel5, 1000);

} 

if(event.keyCode===13 && winning.value==="3 blue 3 black" && secondLevel.textContent==="Count blue and black squares")  {

clearInterval(ice7);
ice7=null;
winning.readOnly=true;
ice8=setTimeout(newLevel6, 1000);
ice9=setInterval(startNewLevel6, 1000);

}

if(event.keyCode===13 && winning.value==="4 pink 6 brown" && secondLevel.textContent==="Count pink and brown squares")  {

clearInterval(ice9);
ice9=null;
winning.readOnly=true;
ice10=setTimeout(newLevel7, 1000);
ice11=setInterval(startNewLevel7, 1000);

 }

if(event.keyCode===13 && winning.value==="6 red 8 orange" && secondLevel.textContent==="Count red and orange squares")  {

clearInterval(ice11);
ice11=null;
winning.readOnly=true;
ice12=setTimeout(newLevel8, 1000);
ice13=setInterval(startNewLevel8, 1000);

  }

if(event.keyCode===13 && winning.value==="8 yellow 10 white" && secondLevel.textContent==="Count yellow and white squares")  {

clearInterval(ice13);
ice13=null;
winning.readOnly=true;
ice14=setTimeout(newLevel9, 1000);
ice15=setInterval(startNewLevel9, 1000);

  }

if(event.keyCode===13 && winning.value==="15 purple 7 gray" && secondLevel.textContent==="Count purple and gray squares")  {  

clearInterval(ice15);
ice15=null;
winning.readOnly=true;
ice16=setTimeout(newLevel10, 1000);
ice17=setInterval(startNewLevel10, 1000);

  }

if(event.keyCode===13 && winning.value==="2 red 2 orange 2 yellow" && secondLevel.textContent==="Count red orange and yellow squares")  {    

clearInterval(ice17);
ice17=null;
winning.readOnly=true;
ice18=setTimeout(newLevel11, 1000);
ice19=setInterval(startNewLevel11, 1000);

 }

if(event.keyCode===13 && winning.value==="3 blue 3 green 4 black" && secondLevel.textContent==="Count blue green and black squares")  {    

clearInterval(ice19);
ice19=null;
winning.readOnly=true;
ice20=setTimeout(newLevel12, 1000);
ice21=setInterval(startNewLevel12, 1000);

 }

if(event.keyCode===13 && winning.value==="5 pink 5 brown 4 white" && secondLevel.textContent==="Count pink brown and white squares")  {

clearInterval(ice21);
ice21=null;
winning.readOnly=true;
ice22=setTimeout(newLevel13, 1000);
ice23=setInterval(startNewLevel13, 1000);

 }

if(event.keyCode===13 && winning.value==="6 red 6 gray 6 green" && secondLevel.textContent==="Count red gray and green squares")  {

clearInterval(ice23);
ice23=null;
winning.readOnly=true;
ice24=setTimeout(newLevel14, 1000);
ice25=setInterval(startNewLevel14, 1000);

 }

if(event.keyCode===13 && winning.value==="7 yellow 7 black 8 brown" && secondLevel.textContent==="Count yellow black and brown squares")  {

clearInterval(ice25);
ice25=null;
winning.readOnly=true;
ice26=setTimeout(newLevel15, 1000);
ice27=setInterval(startNewLevel15, 1000);

  }

if(event.keyCode===13 && winning.value==="2 purple 2 red 1 green 1 gray" && secondLevel.textContent==="Count purple red green and gray squares")  {

clearInterval(ice27);
ice27=null;
winning.readOnly=true;
ice28=setTimeout(newLevel16, 1000);
ice29=setInterval(startNewLevel16, 1000);

  }

if(event.keyCode===13 && winning.value==="3 green 3 blue 2 yellow 2 black" && secondLevel.textContent==="Count green blue yellow and black squares")  {  

clearInterval(ice29);
ice29=null;
winning.readOnly=true;
ice30=setTimeout(newLevel17, 1000);
ice31=setInterval(startNewLevel17, 1000);

 }

if(event.keyCode===13 && winning.value==="2 red 5 white 3 brown 4 pink" && secondLevel.textContent==="Count red white brown and pink squares")  {  

clearInterval(ice31);
ice31=null;
winning.readOnly=true;
ice32=setTimeout(newLevel18, 1000);
ice33=setInterval(startNewLevel18, 1000);

 }

if(event.keyCode===13 && winning.value==="6 black 4 green 5 purple 3 gray" && secondLevel.textContent==="Count black green purple and gray squares")  {  

clearInterval(ice33);
ice33=null;
winning.readOnly=true;
ice34=setTimeout(newLevel19, 1000);
ice35=setInterval(startNewLevel19, 1000);

 }

if(event.keyCode===13 && winning.value==="5 blue 6 yellow 7 pink 4 white" && secondLevel.textContent==="Count blue yellow pink and white squares")  {   

clearInterval(ice35);
ice35=null;
winning.readOnly=true;
setTimeout(winnerTakesAll, 2000);

  }
  
}

function winnerTakesAll() {
  
  document.body.style.background="#55ACEE";
  document.body.style.color="white";
  document.body.style.textAlign="center";
  document.body.style.fontSize="60px";
  document.body.style.fontFamily="Segoe Print";
  document.body.innerHTML="<div class='victory'>CONGRATS YOU ARE THE WINNER :)</div>";
  document.body.innerHTML +='<iframe src="SweetVictory.mp3" id="muting1"></iframe><audio class="audioVideo" autoplay><source src="SweetVictory.mp3" type="audio/mp3"></audio>';
 
}


function newLevel1() {

secondLevel.textContent="Count purple squares";
runLevel1();
back.textContent="Level 2";

for(let i=0; i < purple.length; ++i)  {

cubing[purple[i]].style.background="#6b5b95";


}
 
for(let i=0; i < orange.length; ++i)  {

cubing[orange[i]].style.background="#4285F4";


        }

     }


function runLevel1() {
	
clearTimeout(newStart);
newStart=null;
timer.textContent=26;
winning.readOnly=false;
winning.value="";

}

function startNewLevel1() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(timing);
timing=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

  }


if(timer.textContent < 10) {

$(timer).prepend(0);

 }


}

function newLevel2() {

secondLevel.textContent="Count green squares";
runLevel2();
back.textContent="Level 3";

for(let i=0; i < purple.length; ++i)  {

cubing[purple[i]].style.background="#4285F4";


}
 
for(let i=0; i < green.length; ++i)  {

cubing[green[i]].style.background="#34A853";


        }

     }

function runLevel2() {
	
clearTimeout(ice);
ice=null;
timer.textContent=31;
winning.readOnly=false;
winning.value="";

}     

function startNewLevel2() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice1);
ice1=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

  }


if(timer.textContent < 10) {

$(timer).prepend(0);

 }

}

function newLevel3() {

secondLevel.textContent="Count red squares";
runLevel3();
back.textContent="Level 4";

for(let i=0; i < green.length; ++i)  {

cubing[green[i]].style.background="#4285F4";


}
 
for(let i=0; i < red.length; ++i)  {

cubing[red[i]].style.background="#EA4335";


        }

}

function runLevel3() {
	
clearTimeout(ice2);
ice2=null;
timer.textContent=36;
winning.readOnly=false;
winning.value="";

}    


function startNewLevel3() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice3);
ice3=null;
winning.readOnly=true;
winning.style.background="#EA4335";
for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 


function newLevel4() {

secondLevel.textContent="Count yellow squares";
runLevel4();
back.textContent="Level 5";

for(let i=0; i < red.length; ++i)  {

cubing[red[i]].style.background="#4285F4";


}
 
for(let i=0; i < yellow.length; ++i)  {

cubing[yellow[i]].style.background="#ffff00";


        }

}

function runLevel4() {
	
clearTimeout(ice2);
ice2=null;
timer.textContent=41;
winning.readOnly=false;
winning.value="";

}    

function startNewLevel4() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice5);
ice5=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

     }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 


function newLevel5() {

secondLevel.textContent="Count blue and black squares";
runLevel5();
back.textContent="Level 6";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#34A853";


}
 
for(let i=0; i < 3; ++i)  {

cubing[blue[i]].style.background="#4285F4";
cubing[black[i]].style.background="#292F33";

        }

}

function runLevel5() {
	
clearTimeout(ice6);
ice6=null;
timer.textContent=21;
winning.readOnly=false;
winning.value="";

}  

function startNewLevel5() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice7);
ice7=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);    

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}   


function newLevel6() {

secondLevel.textContent="Count pink and brown squares";
runLevel6();
back.textContent="Level 7";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#34A853";


}
 
for(let i=0; i < 3; ++i)  {

cubing[blue[i]].style.background="#34A853";
cubing[black[i]].style.background="#34A853";

   }

for(let i=0; i < pink.length; ++i)  {

cubing[pink[i]].style.background="#ff66ff";

  }

for(let i=0; i < brown.length; ++i)  {

cubing[brown[i]].style.background="#993300";

  }


}

function runLevel6() {
	
clearTimeout(ice8);
ice6=null;
timer.textContent=26;
winning.readOnly=false;
winning.value="";

}  

function startNewLevel6() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice9);
ice9=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}   


function newLevel7() {

secondLevel.textContent="Count red and orange squares";
runLevel7();
back.textContent="Level 8";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#34A853";


}
 

for(let i=0; i < red1.length; ++i)  {

cubing[red1[i]].style.background="#EA4335";

  }

for(let i=0; i < orange1.length; ++i)  {

cubing[orange1[i]].style.background="#FBBC05";

  }


}

function runLevel7() {
	
clearTimeout(ice10);
ice6=null;
timer.textContent=31;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel7() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice11);
ice11=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    

function newLevel8() {

secondLevel.textContent="Count yellow and white squares";
runLevel8();
back.textContent="Level 9";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#34A853";


}
 

for(let i=0; i < yellow1.length; ++i)  {

cubing[yellow1[i]].style.background="#ffff00";

  }

for(let i=0; i < white.length; ++i)  {

cubing[white[i]].style.background="#FFFFFF";

  }


}

function runLevel8() {
	
clearTimeout(ice12);
ice12=null;
timer.textContent=36;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel8() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice13);
ice13=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    


function newLevel9() {

secondLevel.textContent="Count purple and gray squares";
runLevel9();
back.textContent="Level 10";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#34A853";


}
 

for(let i=0; i < purple1.length; ++i)  {

cubing[purple1[i]].style.background="#6b5b95";

  }

for(let i=0; i < gray.length; ++i)  {

cubing[gray[i]].style.background="#cccccc";

  }


}

function runLevel9() {
	
clearTimeout(ice14);
ice14=null;
timer.textContent=41;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel9() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice15);
ice15=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    


function newLevel10() {

secondLevel.textContent="Count red orange and yellow squares";
runLevel10();
back.textContent="Level 11";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#6b5b95";


}
 

for(let i=0; i < red2.length; ++i)  {

cubing[red2[i]].style.background="#EA4335";

  }

for(let i=0; i < orange2.length; ++i)  {

cubing[orange2[i]].style.background="#FBBC05";

  }

for(let i=0; i < yellow2.length; ++i)  {

cubing[yellow2[i]].style.background="#ffff00";

  }

}


function runLevel10() {
	
clearTimeout(ice16);
ice16=null;
timer.textContent=21;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel10() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice17);
ice17=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    


function newLevel11() {

secondLevel.textContent="Count blue green and black squares";
runLevel11();
back.textContent="Level 12";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#6b5b95";


}
 

for(let i=0; i < blue3.length; ++i)  {

cubing[blue3[i]].style.background="#4285F4";

  }

for(let i=0; i < green3.length; ++i)  {

cubing[green3[i]].style.background="#34A853";

  }

for(let i=0; i < black3.length; ++i)  {

cubing[black3[i]].style.background="#292F33";

  }


}

function runLevel11() {
	
clearTimeout(ice18);
ice18=null;
timer.textContent=26;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel11() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice19);
ice19=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    

function newLevel12() {

secondLevel.textContent="Count pink brown and white squares";
runLevel12();
back.textContent="Level 13";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#6b5b95";


}
 

for(let i=0; i < pink3.length; ++i)  {

cubing[pink3[i]].style.background="#ff66ff";

  }

for(let i=0; i < brown3.length; ++i)  {

cubing[brown3[i]].style.background="#993300";

  }

for(let i=0; i < white3.length; ++i)  {

cubing[white3[i]].style.background="#FFFFFF";

  }


}

function runLevel12() {
	
clearTimeout(ice20);
ice20=null;
timer.textContent=31;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel12() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice21);
ice21=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    

function newLevel13() {

secondLevel.textContent="Count red gray and green squares";
runLevel13();
back.textContent="Level 14";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#6b5b95";


}
 

for(let i=0; i < red44.length; ++i)  {

cubing[red44[i]].style.background="#EA4335";

  }

for(let i=0; i < gray44.length; ++i)  {

cubing[gray44[i]].style.background="#cccccc";

  }

for(let i=0; i < green44.length; ++i)  {

cubing[green44[i]].style.background="#34A853";

  }


}

function runLevel13() {
	
clearTimeout(ice22);
ice22=null;
timer.textContent=36;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel13() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice23);
ice23=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

}    







function newLevel14() {

secondLevel.textContent="Count yellow black and brown squares";
runLevel14();
back.textContent="Level 15";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#6b5b95";


}
 

for(let i=0; i < yellow44.length; ++i)  {

cubing[yellow44[i]].style.background="#ffff00";

  }

for(let i=0; i < black44.length; ++i)  {

cubing[black44[i]].style.background="#292F33";

  }

for(let i=0; i < brown44.length; ++i)  {

cubing[brown44[i]].style.background="#993300";

  }


}


function runLevel14() {
	
clearTimeout(ice24);
ice24=null;
timer.textContent=41;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel14() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice25);
ice25=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 

function newLevel15() {

secondLevel.textContent="Count purple red green and gray squares";
runLevel15();
back.textContent="Level 16";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#FBBC05";


}
 

for(let i=0; i < purple55.length; ++i)  {

cubing[purple55[i]].style.background="#6b5b95";

  }

for(let i=0; i < red55.length; ++i)  {

cubing[red55[i]].style.background="#EA4335";

  }

for(let i=0; i < green55.length; ++i)  {

cubing[green55[i]].style.background="#34A853";

  }

for(let i=0; i < gray55.length; ++i)  {

cubing[gray55[i]].style.background="#cccccc";

  }

}   

function runLevel15() {
	
clearTimeout(ice26);
ice26=null;
timer.textContent=21;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel15() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice27);
ice27=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 


function newLevel16() {

secondLevel.textContent="Count green blue yellow and black squares";
runLevel16();
back.textContent="Level 17";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#FBBC05";


}
 

for(let i=0; i < green66.length; ++i)  {

cubing[green66[i]].style.background="#34A853";

  }

for(let i=0; i < blue66.length; ++i)  {

cubing[blue66[i]].style.background="#4285F4";

  }

for(let i=0; i < yellow66.length; ++i)  {

cubing[yellow66[i]].style.background="#ffff00";

  }

for(let i=0; i < black66.length; ++i)  {

cubing[black66[i]].style.background="#292F33";

  }

}   

function runLevel16() {
	
clearTimeout(ice28);
ice28=null;
timer.textContent=26;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel16() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice29);
ice29=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 

function newLevel17() {

secondLevel.textContent="Count red white brown and pink squares";
runLevel17();
back.textContent="Level 18";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#FBBC05";


}
 

for(let i=0; i < red77.length; ++i)  {

cubing[red77[i]].style.background="#EA4335";

  }

for(let i=0; i < white77.length; ++i)  {

cubing[white77[i]].style.background="#FFFFFF";

  }

for(let i=0; i < brown77.length; ++i)  {

cubing[brown77[i]].style.background="#993300";

  }

for(let i=0; i < pink77.length; ++i)  {

cubing[pink77[i]].style.background="#ff66ff";

  }

}   

function runLevel17() {
	
clearTimeout(ice30);
ice30=null;
timer.textContent=31;
winning.readOnly=false;
winning.value="";

} 

function startNewLevel17() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice31);
ice31=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

   }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 

function newLevel18() {

secondLevel.textContent="Count black green purple and gray squares";
runLevel18();
back.textContent="Level 19";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#FBBC05";


}
 

for(let i=0; i < black88.length; ++i)  {

cubing[black88[i]].style.background="#292F33";

  }

for(let i=0; i < green88.length; ++i)  {

cubing[green88[i]].style.background="#34A853";

  }

for(let i=0; i < purple88.length; ++i)  {

cubing[purple88[i]].style.background="#6b5b95";

  }

for(let i=0; i < gray88.length; ++i)  {

cubing[gray88[i]].style.background="#cccccc";

  }

}  

function runLevel18() {
	
clearTimeout(ice32);
ice32=null;
timer.textContent=36;
winning.readOnly=false;
winning.value="";

}  

function startNewLevel18() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice33);
ice33=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

  }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 

function newLevel19() {

secondLevel.textContent="Count blue yellow pink and white squares";
runLevel19();
back.textContent="Level 20";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#FBBC05";


}
 

for(let i=0; i < blue99.length; ++i)  {

cubing[blue99[i]].style.background="#4285F4";

  }

for(let i=0; i < yellow99.length; ++i)  {

cubing[yellow99[i]].style.background="#ffff00";

  }

for(let i=0; i < pink99.length; ++i)  {

cubing[pink99[i]].style.background="#ff66ff";

  }

for(let i=0; i < white99.length; ++i)  {

cubing[white99[i]].style.background="#FFFFFF";

  }

}  


function runLevel19() {
	
clearTimeout(ice34);
ice34=null;
timer.textContent=41;
winning.readOnly=false;
winning.value="";

}  


function startNewLevel19() {

timer.textContent -=1;	

if(timer.textContent < 1) {

clearInterval(ice35);
ice35=null;
winning.readOnly=true;
winning.style.background="#EA4335";

for(let i=0; i < cubing.length; ++i)  {

cubing[i].style.background="#4285F4";

    }

setTimeout(playAgain, 2000);

  }

if(timer.textContent < 10) {

$(timer).prepend(0);

  }

} 