console.log('abcd');


var knop1 = document.getElementById('knop1');
var knop2 = document.getElementById('knop2');
var knop3 = document.getElementById('knop3');
var video = document.getElementById('video');


knop1.addEventListener('click', knop1Overgang);
knop2.addEventListener('click', knop2Overgang);
knop3.addEventListener('click', knop3Overgang);

function knop1Overgang() {
    video.src = "videos/state1-zwemmen.mp4";
    console.log('knop1');
}

function knop2Overgang() {
    video.src = "videos/state2-lopen.mp4";
    console.log('knop2');
}

function knop3Overgang() {
    video.src = "videos/state3-springen.mp4";
    console.log('knop3');
}


var loaderOverlay = document.querySelector('.loader');
var loaderButton = document.querySelector('.loader button');

var loaderVideo = document.querySelector('.loader video');
loaderVideo.addEventListener('ended', loading, false);

function loading() {
    loaderButton.classList.add('visible');
}

loaderButton.addEventListener('click', hideLoader);

function hideLoader() {
    loaderOverlay.classList.add('hidden');
    video.autoplay = true;
    video.load();
}


