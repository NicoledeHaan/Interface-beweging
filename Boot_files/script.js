var buttonMooi = document.getElementById('button_mooi');
var buttonMatig = document.getElementById('button_matig');
var buttonSlecht = document.getElementById('button_slecht');
var video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);

function speelMooi() {
    video.src = "Boot_files/img/videos/Functie1.mp4";
    console.log('run mooi');
}

function speelMatig() {
    video.src = "Boot_files/img/videos/Functie2.mp4";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "Boot_files/img/videos/Functie3.mp4";
    console.log('sup slecht');
}