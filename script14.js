const div = document.getElementById("div14");
div.onclick = function(){
  div.style.display = "none";
  audioe14a.play();
  audioe14b.play();

}

let audioe14a = new Audio();
audioe14a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e14_NoSaltas.mp3?v=1664496453460";
audioe14a.loop="true";
audioe14a.volume = 0;

let audioe14b = new Audio();
audioe14b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e14_SaltasCarro.mp3?v=1664496419034";
audioe14b.loop="true";
audioe14b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene14a");
s1.onmouseover = ()=>{
  audioe14a.volume = 1;
   audioe14b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe14a.volume = 0;
   audioe14b.volume = 0;
}
  
let s2 = document.getElementById("imagene14b");
s2.onmouseover = ()=>{
  audioe14a.volume = 0;
  audioe14b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe14a.volume = 0;
  audioe14b.volume = 0;
  
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