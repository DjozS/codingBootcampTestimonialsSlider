const tanyaMain = document.getElementById("personOne")
const johnMain = document.getElementById("personTwo")
function previous(){
    tanyaMain.style.display = "flex";
    johnMain.style.display = "none";
}
function next(){
    tanyaMain.style.display = "none";
    johnMain.style.display = "flex";
}