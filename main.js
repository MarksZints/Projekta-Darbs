let turpinat=document.getElementById("turpinat");
let noteikumi=document.getElementById("noteikumi");
let vienadiPari=0;
turpinat.addEventListener("click", nonemt);

function nonemt(){
 
//tiek noņemts pirmais uznirstošais logs ar noteikumiem
noteikumi.classList.remove("rules");
noteikumi.classList.add("neredzams");

let kluduSkaits=0;
let pareizoSkaits=0;
const tabulina = document.getElementById("tabula");

//tiek izveidota grutibas pakapes izvēles poga

const izvelesPoga = document.createElement("select");
izvelesPoga.classList.add("izvelesPoga");
const opcijas = [8,10,12,14,16,18,20];
opcijas.forEach((opcija, indekss) => {
    const jaunaOpcija = document.createElement("option");
    jaunaOpcija.value = opcijas[indekss];
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

opcijuDiv.appendChild(saktSpeli);
opcijuDiv.appendChild(izvelesPoga);
saktSpeli.appendChild(tekstsPogai);


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
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/NR-1Titulbilde.tif/lossy-page1-1200px-NR-1Titulbilde.tif.jpg",
"https://img.pilseta24.lv/media/768x575c/users/article/galleries/150/524/15052411.jpg",
"https://img.pilseta24.lv/media/768x575c/users/article/galleries/150/524/15052411.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2022/07/smiltenes-svetki.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2022/07/smiltenes-svetki.jpg",
"https://i.tiesraides.lv/1200x0s/pictures/2023-08-25/5499_autokross.jpg",
"https://i.tiesraides.lv/1200x0s/pictures/2023-08-25/5499_autokross.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2022/03/10551563_579606918812676_1775675797406723621_o-1024x735.jpg",
"https://ziemellatvija.lv/wp-content/uploads/2022/03/10551563_579606918812676_1775675797406723621_o-1024x735.jpg",
"https://www.latvia.travel/sites/default/files/styles/mobile_promo/public/media_image/tourism_sight/vecais_parks_pargaznis_evija_ziemina.jpg?itok=wKwzxnos.jpg",
"https://www.latvia.travel/sites/default/files/styles/mobile_promo/public/media_image/tourism_sight/vecais_parks_pargaznis_evija_ziemina.jpg?itok=wKwzxnos.jpg",
"https://aluksniesiem.lv/wp-content/uploads/2022/11/37-1024x633.jpg",
"https://aluksniesiem.lv/wp-content/uploads/2022/11/37-1024x633.jpg",


];

const kopaPrieksa=["https://github.com/MarksZints/att-li/blob/main/prieksa%20(1).png?raw=true.png"];





//ja grūtībās pakāpe ir 2, tiek katrā rindā pievienotas vairāk šūnas

let grutibasPakape=izvelesPoga.value;
let nedalasArCetri=false;

if (grutibasPakape % 5 == 0) {
    let rinduSkaits = grutibasPakape / 5;
    for (let a = 0; a < rinduSkaits; a++) {
        let rinda = document.createElement("tr");
        for (let i = 0; i < 5; i++) {
            rinda.insertCell();
        }
        tabulina.appendChild(rinda);
    }
} 


else if (grutibasPakape % 4 == 0) {
    let rinduSkaits = grutibasPakape / 4;
    for (let a = 0; a < rinduSkaits; a++) {
        let rinda = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
            rinda.insertCell();
        }
        tabulina.appendChild(rinda);
    }
}

else  {
    let rinduSkaits = parseFloat(grutibasPakape +2)/ 4;
    grutibasPakape=parseFloat(grutibasPakape)+2;
    for (let a = 0; a < rinduSkaits; a++) {
        let rinda = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
            rinda.insertCell();
        }
        tabulina.appendChild(rinda);
    }
    nedalasArCetri=true;
}
       
    const sunas = tabulina.getElementsByTagName('td');
alert("grūtības pakāpe ir " +grutibasPakape);




    opcijuDiv.classList.remove("opcijas");
    opcijuDiv.classList.add("neredzams");

    for (let i = 0; i < sunas.length; i++) {
        sunas[i].innerHTML = "";
      }
//kārtis tiek samaisītas nejaušā secībā (bilžu skaits nedalās ar 4)
if(nedalasArCetri==true){
    for (let i = 0; i < (grutibasPakape-2); i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [kopa[i], kopa[randomIndex]] = [kopa[randomIndex], kopa[i]];
    }
    vienadiPari=(grutibasPakape-2)/2;
    alert(vienadiPari);
}
//kārtis tiek samaisītas nejaušā secībā  (bilžu skaits dalās ar 4)
else if(nedalasArCetri==false){
    for (let i = 0; i < grutibasPakape; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [kopa[i], kopa[randomIndex]] = [kopa[randomIndex], kopa[i]];
    }
vienadiPari=(grutibasPakape)/2;
}
let kartasSkaitlis=0;

    for (let i = 0; i < grutibasPakape; i++) {
        if(nedalasArCetri==false){
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


    else if(nedalasArCetri==true){
        if(i!=grutibasPakape-4 && i!=grutibasPakape-1){
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
        bildeAizmugure.setAttribute("src", kopa[kartasSkaitlis]);
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
        kartasSkaitlis=kartasSkaitlis+1;
    }
}

}
if (kartasSkaitlis == 14 ) {
    tabulina.classList.add("cetrpadsmit");
}
else if (grutibasPakape == 16) {
    tabulina.classList.add("sespadsmit");
}
else if (kartasSkaitlis == 18) {
    tabulina.classList.add("astonpadsmit");
}
else if (grutibasPakape == 20) {
    tabulina.classList.add("divdesmit");
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

}
