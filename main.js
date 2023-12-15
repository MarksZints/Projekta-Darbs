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
}
}
let divasKartinas=[];
let a=0;
function apgrieztKartinu(){
    //tiek pievienota klase "apgriezta, kas apgriež karti otrādāk"
    this.classList.toggle("apgriezta");
    //pie divasKartinas tiek pievienota konkrētā kartiņa
    divasKartinas.push(this);
    a=a+1;
    //ja a=2 jeb, ja 2 kartiņas ir izvēlētas, notiek funkcija, kas pārbauda, vai kartiņas ir vienādas.
   
    if(a==2){          //ŠEIT SĀKAS IF a==2 CIKLS, 
       
        //pēc 2 sekundēm notiek funckija
        setTimeout(parbauditVaiVienadas, 2000);
        }
    function parbauditVaiVienadas(){

            //ja nosacījums neizpildās, (ja kartiņas nav vienādas) , tad...
           if (divasKartinas[0].querySelector(".aizmugure img").src != divasKartinas[1].querySelector(".aizmugure img").src) {
                setTimeout(neapsveicam, 1000);
                //tad katra no kartiņām tiek apgriezta atpakaļ
            for (const kartina of divasKartinas) {
              kartina.classList.toggle("apgriezta");  
              }
              //atjaunojas a cikls, kā arī izdzēšas saraksts "divas kartiņas", lai tām pēc tam būtu pievienotas atkal divas, jaunas kartiņas
              a=0;
              divasKartinas=[];
              function neapsveicam(){
                alert("nepareizi");
              }
            }  

    //ja nosacījums izpildās, (ja kartiņas ir vienādas), tad...
         if (divasKartinas[0].querySelector(".aizmugure img").src == divasKartinas[1].querySelector(".aizmugure img").src) {
           setTimeout(apsveicam,1000);
        }
        //atjaunojas a cikls, kā arī izdzēšas saraksts "divas kartiņas", lai tām pēc tam būtu pievienotas atkal divas, jaunas kartiņas
        a=0;
        divasKartinas=[];
        function apsveicam(){
        alert("apsveicam");
        }
        //šoreiz kartiņas nepagriežas otrādāk, jo tā tika atminētas
        
    }                   //ŠEIT BEIDZAS IF a==2  CIKLS
}
