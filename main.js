const darbinatPogu=document.getElementById("poga");
darbinatPogu.addEventListener("click", sajauktDatus);


const kopa=["https://upload.wikimedia.org/wikipedia/lv/thumb/b/b8/Smiltenes_vidusskola.jpg/1200px-Smiltenes_vidusskola.jpg",
"https://upload.wikimedia.org/wikipedia/lv/thumb/b/b8/Smiltenes_vidusskola.jpg/1200px-Smiltenes_vidusskola.jpg",
"https://static.lsm.lv/media/2021/06/large/1/ffi2.jpg",
"https://static.lsm.lv/media/2021/06/large/1/ffi2.jpg",
"https://api.delfi.lv/media-api-image-cropper/v1/e8bbfeb0-7cdb-11ed-8846-9995931d2a47.jpg?w=576&h=313.jpg",
"https://api.delfi.lv/media-api-image-cropper/v1/e8bbfeb0-7cdb-11ed-8846-9995931d2a47.jpg?w=576&h=313.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/NR-1Titulbilde.tif/lossy-page1-1200px-NR-1Titulbilde.tif.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/NR-1Titulbilde.tif/lossy-page1-1200px-NR-1Titulbilde.tif.jpg"];

const kopaPrieksa=["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/703px-Card_back_01.svg.png"];

const kopasgarums = kopa.length;
const tabulina = document.getElementById("tabula");
const sunas = tabulina.getElementsByTagName('td');

function sajauktDatus() {
    for (let i = 0; i < sunas.length; i++) {
        sunas[i].innerHTML = "";
      }
      
    for (let i = 0; i < kopasgarums; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [kopa[i], kopa[randomIndex]] = [kopa[randomIndex], kopa[i]];
    }

    for (let i = 0; i < kopasgarums; i++) {
        // Izveido div elementu, lai noteiktu izmēru kārtij;
        let kartina=document.createElement("div");
        kartina.classList.add("kartina");
        //izveidojam vēl vienu div, kas kalpos kā kārts priekšpuse
        let kartsPrieksa=document.createElement("div");
        kartsPrieksa.classList.add("prieksa");
        let bildePrieksa=document.createElement("img");
        bildePrieksa.setAttribute("src",kopaPrieksa[0]);
        bildePrieksa.classList.add("bildes");
        kartsPrieksa.appendChild(bildePrieksa);

     
        //izveidojam div, kas kalpos kā kārts aizmugure
        let kartsAizmugure=document.createElement("div");
        kartsAizmugure.classList.add("aizmugure");
        let bildeAizmugure=document.createElement("img");
        bildeAizmugure.setAttribute("src", kopa[i]);
        bildeAizmugure.classList.add("bildes");
        kartsAizmugure.appendChild(bildeAizmugure);
 

        kartina.appendChild(kartsPrieksa);
       kartina.appendChild(kartsAizmugure);
        sunas[i].appendChild(kartina);
    
kartina.addEventListener("click", apgrieztKartinu);
function apgrieztKartinu(){
    kartina.classList.toggle("apgriezta");
}
}
}
