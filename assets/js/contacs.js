'use strict';

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");



var span = document.getElementsByClassName("modal__close")[0];



btn.onclick = function() {
    modal.style.display = "block";
    
}



span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






var modale = document.getElementById('modelener');


var btne = document.getElementById("myenter");


var spane = document.getElementsByClassName("eclose")[0];



btne.onclick = function() {
    modale.style.display = "block";
    modall.style.display = "none";
}


spane.onclick = function() {
    modale.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modale) {
        modale.style.display = "none";
    }
}




var modall = document.getElementById('modelelog');


var btnl = document.getElementById("myreg");



var spanl = document.getElementsByClassName("lclose")[0];


btnl.onclick = function() {
    modall.style.display = "block";
    modale.style.display = "none";
}


spanl.onclick = function() {
    modall.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }
}


var btncl = document.getElementById("myclose");

btncl.onclick = function() {
    modall.style.display = "none";
    modale.style.display = "block";
}


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("menu__change");
    document.getElementById("nav").classList.toggle("menu__change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

var modalu = document.getElementById('myModalu');


var btnu = document.getElementById("myBtnu");



var spanu = document.getElementsByClassName("modalu__close")[0];



btnu.onclick = function() {
    modalu.style.display = "block";
    
}



spanu.onclick = function() {
    modalu.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalu) {
        modalu.style.display = "none";
    }
}
  
  
  spanu.onclick = function() {
      modalu.style.display = "none";
  }
  
  
  window.onclick = function(event) {
      if (event.target == modalu) {
          modalu.style.display = "none";
      }
  }
  





  var modalsent = document.getElementById('conts');


  var btnsent = document.getElementById("cont-btn");
  
  
  
  var spansent = document.getElementsByClassName("conts__close")[0];

  var spansentb = document.getElementsByClassName("conts__input-btn")[0];
  
  
  
  btnsent.onclick = function() {
    modalsent.style.display = "block";
      
  }
  
  spansentb.onclick = function() {
    modalsent.style.display = "none";
  }
  
  spansent.onclick = function() {
    modalsent.style.display = "none";
  }
  
  
  window.onclick = function(event) {
      if (event.target == modalsent) {
        modalsent.style.display = "none";
      }
  }




  


var modala = document.getElementById('about');


var btna = document.getElementById("about-btn");


var spana = document.getElementsByClassName("about__closex")[0];



btna.onclick = function() {
    modala.style.display = "block";
    
}



spana.onclick = function() {
    modala.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modala) {
        modala.style.display = "none";
    }
}

