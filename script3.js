const div = document.getElementById("div3");
div.onclick = function(){
  div.style.display = "none";
  audioe3a.play();
  audioe3b.play();

}

let audioe3a = new Audio();
audioe3a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e3_Vaso.mp3?v=1664493166822";
audioe3a.loop="true";
audioe3a.volume = 0;

let audioe3b = new Audio();
audioe3b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e3_NoGracias.mp3?v=1664493089489";
audioe3b.loop="true";
audioe3b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene3a");
s1.onmouseover = ()=>{
  audioe3a.volume = 1;
   audioe3b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe3a.volume = 0;
   audioe3b.volume = 0;
}
  
let s2 = document.getElementById("imagene3b");
s2.onmouseover = ()=>{
  audioe3a.volume = 0;
  audioe3b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe3a.volume = 0;
  audioe3b.volume = 0;
  
} 

var audio5 = new Audio("https://cdn.glitch.me/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/instrumental_casa.wav?v=1664503205001");
   var audio6 = new Audio("https://cdn.glitch.me/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/instrumental_fiesta.wav?v=1664503715869");
  
  
  window.onkeyup = function(e){
    if(e.key == "1"){
  audio5.play();
       audio5.volume = 1;
  }
     if(e.key == "2"){
  audio6.play();
        audio6.volume = 1;
    }
  

 if(e.key == "q"){
  audio5.volume = 0;

    }
    
    if(e.key == "w"){
  audio6.volume = 0;

    }
    
 if(e.key == "a"){
  audio5.volume = 1;
   
  }

     if(e.key == "s"){
  audio6.volume = 1;
       
  }

  }