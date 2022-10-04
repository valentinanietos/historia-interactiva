const div = document.getElementById("div12");
div.onclick = function(){
  div.style.display = "none";
  audioe12a.play();


}

let audioe12a = new Audio();
audioe12a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e12_Beso.mp3?v=1664494333281";
audioe12a.loop="true";
audioe12a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene12a");
s1.onmouseover = ()=>{
  audioe12a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe12a.volume = 0;
  
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