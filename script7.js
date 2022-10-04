const div = document.getElementById("div7");
div.onclick = function(){
  div.style.display = "none";
  audioe7a.play();
  audioe7b.play();

}

let audioe7a = new Audio();
audioe7a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e7_Celular.mp3?v=1664493814111";
audioe7a.loop="true";
audioe7a.volume = 0;

let audioe7b = new Audio();
audioe7b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e7_NoSignal.mp3?v=1664493832656";
audioe7b.loop="true";
audioe7b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene7a");
s1.onmouseover = ()=>{
  audioe7a.volume = 1;
   audioe7b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe7a.volume = 0;
   audioe7b.volume = 0;
}
  
let s2 = document.getElementById("imagene7b");
s2.onmouseover = ()=>{
  audioe7a.volume = 0;
  audioe7b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe7a.volume = 0;
  audioe7b.volume = 0;
  
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