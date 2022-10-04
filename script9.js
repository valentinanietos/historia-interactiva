const div = document.getElementById("div9");
div.onclick = function(){
  div.style.display = "none";
  audioe9a.play();


}

let audioe9a = new Audio();
audioe9a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e9_Casa.mp3?v=1664493959717";
audioe9a.loop="true";
audioe9a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene9a");
s1.onmouseover = ()=>{
  audioe9a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe9a.volume = 0;
  
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