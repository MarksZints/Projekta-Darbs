let turpinat=document.getElementById("turpinat");
let noteikumi=document.getElementById("noteikumi");
turpinat.addEventListener("click", nonemt);

function nonemt(){
 
//tiek noņemts pirmais uznirstošais logs ar noteikumiem
noteikumi.classList.remove("rules");
noteikumi.classList.add("neredzams");

let kluduSkaits=0;
let pareizoSkaits=0;
const tabulina = document.getElementById("tabula");
const rindas=tabulina.getElementsByTagName("tr");

//tiek izveidota grutibas pakapes izvēles poga

const izvelesPoga = document.createElement("select");
izvelesPoga.classList.add("izvelesPoga");
const opcijas = ["Opcija 1", "Opcija 2", "Opcija 3"];
opcijas.forEach((opcija, indekss) => {
    const jaunaOpcija = document.createElement("option");
    jaunaOpcija.value = indekss + 1;
    jaunaOpcija.text = opcija;
    izvelesPoga.add(jaunaOpcija);
});

let opcijuDiv=document.createElement("div");
opcijuDiv.classList.add("opcijas");

let saktSpeli=document.createElement("button");
saktSpeli.classList.add("saktSpeli");

let tekstsPogai=document.createElement("p");
tekstsPogai.innerText="Spied, lai sāktu spēli";
tekstsPogai.classList.add("pogasTeksts");

saktSpeli.appendChild(tekstsPogai);
opcijuDiv.appendChild(saktSpeli);
opcijuDiv.appendChild(izvelesPoga);

var bodyElements = document.body;
setTimeout(() => {
    bodyElements.appendChild(opcijuDiv);
}, 1000);

saktSpeli.addEventListener("click", sajauktDatus);
//tiek nodefinēti elementi= tabula, rindas tabulā, tabulu šūnu skaits un kāršu pāru skaits, kā arī grūtības pakāpe.
function sajauktDatus() {
const kopa=["https://svs.edu.lv/wp-content/uploads/2023/04/s7-770x433.jpg",
"https://svs.edu.lv/wp-content/uploads/2023/04/s7-770x433.jpg",
"https://static.lsm.lv/media/2021/06/large/1/ffi2.jpg",
"https://static.lsm.lv/media/2021/06/large/1/ffi2.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2023/08/ista-smiltenes-stounhendza-1024x635.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2023/08/ista-smiltenes-stounhendza-1024x635.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/NR-1Titulbilde.tif/lossy-page1-1200px-NR-1Titulbilde.tif.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/NR-1Titulbilde.tif/lossy-page1-1200px-NR-1Titulbilde.tif.jpg"];

const kopaPrieksa=["https://github.com/MarksZints/att-li/blob/main/prieksa%20(1).png?raw=true.png"];
const papildusBildes=["https://img.pilseta24.lv/media/768x575c/users/article/galleries/150/524/15052411.jpg",
"https://img.pilseta24.lv/media/768x575c/users/article/galleries/150/524/15052411.jpg"];




//ja grūtībās pakāpe ir 2, tiek katrā rindā pievienotas vairāk šūnas

    let grutibasPakape=izvelesPoga.value;

    if(grutibasPakape==2){
        for(i=0;i<rindas.length;i=i+1){
            kopa.push(papildusBildes[i]);
            rindas[i].insertCell(); 
    }
    }

    //tiek noteikts tabulas šūnu skaits
    const sunas = tabulina.getElementsByTagName('td');
    const kopasgarums = kopa.length;
    vienadiPari=kopasgarums/2;

    opcijuDiv.classList.remove("opcijas");
    opcijuDiv.classList.add("neredzams");

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
        kartina.classList.toggle("apgriezta");
        setTimeout(() => {
        kartina.classList.toggle("apgriezta");
        kartina.addEventListener("click", apgrieztKartinu);
        }, 5000);

}
}

let divasKartinas=[];
let kartesApgriesanasBloks = false;

//apskates laiks ir beidzies, kartiņas ir apgriezušās, sākas funkcija apgriezt kartiņu
function apgrieztKartinu() {
    if (!kartesApgriesanasBloks) {
        this.classList.toggle("apgriezta");
        divasKartinas.push(this);
        this.removeEventListener("click", apgrieztKartinu);

        if (divasKartinas.length === 2) {
            kartesApgriesanasBloks = true;
            setTimeout(parbauditVaiVienadas, 2000);
        }
    }
}

function parbauditVaiVienadas() {
    const bilde1 = divasKartinas[0].querySelector(".aizmugure img").src;
    const bilde2 = divasKartinas[1].querySelector(".aizmugure img").src;

    if (bilde1 !== bilde2) {
        divasKartinas.forEach(kartina => {
            kartina.classList.toggle("apgriezta");
            kartina.addEventListener("click", apgrieztKartinu);
        });


        setTimeout(() => {
            divasKartinas = [];
            kartesApgriesanasBloks = false;
        }, 1000);
        kluduSkaits=kluduSkaits+1;
    } else {
        divasKartinas = [];
        kartesApgriesanasBloks = false;
        pareizoSkaits=pareizoSkaits+1;

    }
    if(pareizoSkaits==vienadiPari){
        alert("Apsveicam, jūs beidzāt spēli ar " +kluduSkaits+ " kļūdām.");
        vienadiPari=4;
        kluduSkaits=0;
        pareizoSkaits=0;
    }
}

}
