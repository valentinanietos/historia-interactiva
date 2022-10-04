const div16 = document.getElementById("div16");
div16.onclick = function(){
  div16.style.display = "none";

  audioe16a.play();
  audioe16b.play();
}

let audioe16a = new Audio();
audioe16a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Netflix_EX.mp3?v=1664419808196";
audioe16a.loop="true";
audioe16a.volume = 0;

let audioe16b = new Audio();
audioe16b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Arrocito_EX.mp3?v=1664419803815";
audioe16b.loop="true";
audioe16b.volume = 0;

let div16g = document.getElementById("div16g");

let s3 = document.getElementById("imagene16a");
s3.onmouseover = ()=>{
  audioe16a.volume = 1;
   audioe16b.volume = 0;

}
s3.onmouseout = ()=>{
  audioe16a.volume = 0;
   audioe16b.volume = 0;
}

let s4 = document.getElementById("imagene16b");
s4.onmouseover = ()=>{
  audioe16a.volume = 0;
   audioe16b.volume = 1;

}
s4.onmouseout = ()=>{
  audioe16a.volume = 0;
   audioe16b.volume = 0;
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