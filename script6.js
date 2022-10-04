const div = document.getElementById("div6");
div.onclick = function(){
  div.style.display = "none";
  audioe6a.play();


}

let audioe6a = new Audio();
audioe6a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e6_Final.mp3?v=1664493755054";
audioe6a.loop="true";
audioe6a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene6a");
s1.onmouseover = ()=>{
  audioe6a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe6a.volume = 0;
  
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
  
