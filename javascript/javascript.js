console.log('abcd');


var knop1 = document.getElementById('knop1');
var knop2 = document.getElementById('knop2');
var knop3 = document.getElementById('knop3');
var video = document.getElementById('video');


knop1.addEventListener('click', knop1Overgang);
knop2.addEventListener('click', knop2Overgang);
knop3.addEventListener('click', knop3Overgang);

function knop1Overgang() {
    video.src = "videos/State1-zwemmen.mp4";
    console.log('knop1');
}

function knop2Overgang() {
    video.src = "videos/State2-lopen.mp4";
    console.log('knop2');
}

function knop3Overgang() {
    video.src = "videos/State3-springen.mp4";
    console.log('knop3');
}