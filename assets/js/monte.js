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



var modalchg1 = document.getElementById('monte1');


var btnchg1 = document.getElementById("monte-1");


var spanchg1 = document.getElementsByClassName("monte1__closex")[0];



btnchg1.onclick = function() {
    modalchg1.style.display = "block";
    
}



spanchg1.onclick = function() {
    modalchg1.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg1) {
        modalchg1.style.display = "none";
    }
}

var modalchg2 = document.getElementById('monte2');


var btnchg2 = document.getElementById("monte-2");


var spanchg2 = document.getElementsByClassName("monte2__closex")[0];



btnchg2.onclick = function() {
    modalchg2.style.display = "block";
    
}



spanchg2.onclick = function() {
    modalchg2.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg2) {
        modalchg2.style.display = "none";
    }
}

var modalchg3 = document.getElementById('monte3');


var btnchg3 = document.getElementById("monte-3");


var spanchg3 = document.getElementsByClassName("monte3__closex")[0];



btnchg3.onclick = function() {
    modalchg3.style.display = "block";
    
}



spanchg3.onclick = function() {
    modalchg3.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg3) {
        modalchg3.style.display = "none";
    }
}

var modalchg4 = document.getElementById('monte4');


var btnchg4 = document.getElementById("monte-4");


var spanchg4 = document.getElementsByClassName("monte4__closex")[0];



btnchg4.onclick = function() {
    modalchg4.style.display = "block";
    
}



spanchg4.onclick = function() {
    modalchg4.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg4) {
        modalchg4.style.display = "none";
    }
}

var modalchg5 = document.getElementById('monte5');


var btnchg5 = document.getElementById("monte-5");


var spanchg5 = document.getElementsByClassName("monte5__closex")[0];



btnchg5.onclick = function() {
    modalchg5.style.display = "block";
    
}



spanchg5.onclick = function() {
    modalchg5.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg5) {
        modalchg5.style.display = "none";
    }
}


var modalchg6 = document.getElementById('monte6');
var btnchg6 = document.getElementById("monte-6");
var spanchg6 = document.getElementsByClassName("monte6__closex")[0];



btnchg6.onclick = function() {
    modalchg6.style.display = "block";
    
}

spanchg6.onclick = function() {
    modalchg6.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalchg6) {
        modalchg6.style.display = "none";
    }
}

var modalchg7 = document.getElementById('monte7');
var btnchg7 = document.getElementById("monte-7");
var spanchg7 = document.getElementsByClassName("monte7__closex")[0];

btnchg7.onclick = function() {
    modalchg7.style.display = "block";
    
}



spanchg7.onclick = function() {
    modalchg7.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg7) {
        modalchg7.style.display = "none";
    }
}



const products = Array.from(document.querySelectorAll('.place__grid-el'));
const productsPerPage = 4; 
let currentPage = 1;

function renderProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    
    products.forEach(product => product.style.display = 'none');
    const currentProducts = products.slice(start, end);
    currentProducts.forEach(product => product.style.display = 'block');
}

function renderPagination() {
    const pageCount = Math.ceil(products.length / productsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('span');
        pageItem.className = 'page-item' + (i === currentPage ? ' active' : '');
        pageItem.textContent = i;
        pageItem.onclick = () => {
            currentPage = i;
            renderProducts(currentPage);
            renderPagination();
        };
        pagination.appendChild(pageItem);
    }
}

function search_guids() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('place__grid-el');
    let h = 0;
         
         
    for (h = 0; h < x.length; h++) {
        if (!x[h].innerHTML.toLowerCase().includes(input)) {
            x[h].style.display = "none";
        }
        else if (input == 0) {
            x[h].style.display = renderProducts(currentPage);
            pagination.style.display = 'block'
        }
        else if(x[h].innerHTML.toLowerCase().includes(input)) {
            x[h].style.display = "block";
            pagination.style.display = 'none'
        }
    }
}

renderProducts(currentPage);
renderPagination();

let turn = true; 


document.getElementById('sortButton').addEventListener('click', function() {
    const grid = document.getElementById('grid_places');
    const items = Array.from(grid.getElementsByClassName('place__grid-el'));
    let SetName = document.getElementById('sortButton')

    items.sort((a, b) => {
        const nameA = a.getAttribute('data-name');
        const nameB = b.getAttribute('data-name');
        return turn ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        
    });
    grid.innerHTML = '';
    items.forEach(item => grid.appendChild(item));

    if (turn == false){
        SetName.innerText = 'Сортировать по возрастанию' ;
    }
    else{
        SetName.innerText = 'Сортировать по убыванию'
    }
    
    turn = !turn;

});



const toggleFilterButton = document.getElementById('show-filters');
const filterButtonsContainer = document.getElementById('filterButtons');
const filterButtons = document.querySelectorAll('.place__filter-button');
const gridItems = document.querySelectorAll('.place__grid-el');


toggleFilterButton.addEventListener('click', function() {
    const isVisible = filterButtonsContainer.style.display === 'block';
    filterButtonsContainer.style.display = isVisible ? 'none' : 'block';
    toggleFilterButton.textContent = isVisible ? 'Показать фильтры' : 'Скрыть фильтры';
});


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        gridItems.forEach(item => {
            if (item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


const apiUrl = 'https://673add6e339a4ce44519711d.mockapi.io/vrar/test'; 

async function getMonte(monteId) {
    const response = await fetch(`${apiUrl}/${monteId}`);
    const data = await response.json();
    return data;
}
const data = getMonte();


document.getElementById('city1').addEventListener('click', async () => {
    const monteId = 1; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('city2').addEventListener('click', async () => {
    const monteId = 2; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('city3').addEventListener('click', async () => {
    const monteId = 3; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hotels1').addEventListener('click', async () => {
    const monteId = 4; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hotels2').addEventListener('click', async () => {
    const monteId = 5; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('parks1').addEventListener('click', async () => {
    const monteId = 6; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('parks2').addEventListener('click', async () => {
    const monteId = 7; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('parks3').addEventListener('click', async () => {
    const monteId = 8; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('interests1').addEventListener('click', async () => {
    const monteId = 9; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('interests2').addEventListener('click', async () => {
    const monteId = 10; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('interests3').addEventListener('click', async () => {
    const monteId = 11; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('beaches1').addEventListener('click', async () => {
    const monteId = 12; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('beaches2').addEventListener('click', async () => {
    const monteId = 13; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('beaches3').addEventListener('click', async () => {
    const monteId = 14; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('resturants1').addEventListener('click', async () => {
    const monteId = 15; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('resturants2').addEventListener('click', async () => {
    const monteId = 16; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('shops1').addEventListener('click', async () => {
    const monteId = 17; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('shops2').addEventListener('click', async () => {
    const monteId = 18; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});



function openMontePage(monte) {
    const monteInfo = `
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Loader Example</title>
          <style>
              .loader {
                  position: sticky;
                  width: 150px;
                  height: 150px;
                  left: 45%;
                  top: 20%;
                  

                  .spinner {
                      width: 100%;
                      height: 100%;
                      border: 30px solid transparent;
                      border-top: 30px solid black;
                      border-radius: 50%;
                      animation: spin 1s linear infinite, changeColor 1s linear infinite;
                  }
              }

              @keyframes spin {
                  0% {
                      transform: rotate(0deg);
                  }
                  100% {
                      transform: rotate(360deg);
                  }
              }
                  
              @keyframes changeColor {
                  0% {
                      border-top-color: #3498db;
                  }
                  25% {
                      border-top-color: #e74c3c;
                  }
                  50% {
                      border-top-color: #f1c40f;
                  }
                  75% {
                      border-top-color: #2ecc71;
                  }
                  100% {
                      border-top-color: #3498db;
                  }
              }

              .content {
                  display: none;
                  text-align: center;
              }
          </style>
      </head>
      <body style='background: url("https://github.com/Kabakus/kartinki/blob/main/BG.png?raw=true"); background-attachment: fixed; margin: 0px'>
      <div class='body' style='height: 200vh; background: linear-gradient(180deg, rgba(252,208,0,0.8) 0%, rgba(244,101,254,0.8) 5%, rgba(0,149,255,0.8) 73%, rgba(0,153,41,0.8044467787114846) 96%);'>
          <div class="loader" id="loader">
              <div class="spinner"></div>
          </div>
          <div class="content" id="content">
              <h2 style="color: #F5F5DC; font-weight: 800; font-size: 64px; text-align: center; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">${monte.title}</h2>
              ${data[i].img}
              <p style="color: #74FF9E; font-weight: 600; font-size: 30px; text-align: center; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">${monte.text}</p>
          </div>
          <script>
              window.onload = function() {
                  const loader = document.getElementById('loader');
                  const content = document.getElementById('content');

                  setTimeout(() => {
                      loader.style.display = 'none';
                      content.style.display = 'block';
                  }, 5000);
              };
          </script>
      </div>
      </body>
        
    `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(monteInfo);
    newWindow.document.close();
}



