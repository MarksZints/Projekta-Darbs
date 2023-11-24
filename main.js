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
        // Izmanto esošo <td> elementu un pievieno tekstu "Sveiki"
        let bilde=document.createElement("img");
        bilde.setAttribute("src", kopa[i]);
        sunas[i].appendChild(bilde);
    }
}