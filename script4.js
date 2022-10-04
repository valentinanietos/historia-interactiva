const div = document.getElementById("div4");
div.onclick = function(){
  div.style.display = "none";
  audioe4a.play();
  audioe4b.play();

}

let audioe4a = new Audio();
audioe4a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e4_Tomas.mp3?v=1664493516184";
audioe4a.loop="true";
audioe4a.volume = 0;

let audioe4b = new Audio();
audioe4b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e4_NoTomas.mp3?v=1664493477854";
audioe4b.loop="true";
audioe4b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene4a");
s1.onmouseover = ()=>{
  audioe4a.volume = 1;
   audioe4b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe4a.volume = 0;
   audioe4b.volume = 0;
}
  
let s2 = document.getElementById("imagene4b");
s2.onmouseover = ()=>{
  audioe4a.volume = 0;
  audioe4b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe4a.volume = 0;
  audioe4b.volume = 0;
  
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