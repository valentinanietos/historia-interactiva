const div = document.getElementById("div5");
div.onclick = function(){
  div.style.display = "none";
  audioe5a.play();
  audioe5b.play();

}

let audioe5a = new Audio();
audioe5a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e5_Vomito.mp3?v=1664493615971";
audioe5a.loop="true";
audioe5a.volume = 0;

let audioe5b = new Audio();
audioe5b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e5_Enfermeria.mp3?v=1664493584498";
audioe5b.loop="true";
audioe5b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene5a");
s1.onmouseover = ()=>{
  audioe5a.volume = 1;
   audioe5b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe5a.volume = 0;
   audioe5b.volume = 0;
}
  
let s2 = document.getElementById("imagene5b");
s2.onmouseover = ()=>{
  audioe5a.volume = 0;
  audioe5b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe5a.volume = 0;
  audioe5b.volume = 0;
  
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