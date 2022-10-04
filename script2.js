const div = document.getElementById("div2");
div.onclick = function(){
  div.style.display = "none";
  audioe2a.play();
  audioe2b.play();

}

let audioe2a = new Audio();
audioe2a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe2a.loop="true";
audioe2a.volume = 0;

let audioe2b = new Audio();
audioe2b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Casual_E2.mp3?v=1664425250791";
audioe2b.loop="true";
audioe2b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene2a");
s1.onmouseover = ()=>{
  audioe2a.volume = 1;
   audioe2b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe2a.volume = 0;
   audioe2b.volume = 0;
}
  
let s2 = document.getElementById("imagene2b");
s2.onmouseover = ()=>{
  audioe2a.volume = 0;
  audioe2b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe2a.volume = 0;
  audioe2b.volume = 0;
  
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


