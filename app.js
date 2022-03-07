
var kick1 = new Audio(encodeURIComponent("./Samples/808/808 - 808 Mini - C.wav"));
var kick2 = new Audio(encodeURIComponent("Samples/808/808 - Apex 808 - C.wav"));

// var vocal = new Audio('./Vocal-Breath_Vox.wav');

var atlantis = new Audio(encodeURIComponent("Samples/LOOPS/atlantis 160 Cm.wav"));
var comingDown = new Audio(encodeURIComponent("Samples/LOOPS/coming down 130 C#.wav"));

const context = new AudioContext();
var audio = new Audio(encodeURIComponent("Samples/808/808 - Apex 808 - C.wav"));
const source = context.createMediaElementSource(audio);
var gainNode = context.createGain();

source.connect(context.destination);
gainNode.connect(context.destination);

function test1() {
    source.play();
    gainNode.gain.setValueAtTime(gainNode.gain.value, context.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.03);
}


function playLoop(loop) {
    loop.loop = true;
    loop.play();
}

function pauseLoop() {
    loop.pause();
}


function play(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'q') {
        console.log("kick")
        // var kick = new Audio(encodeURIComponent("./808 808.wav"));
        play(kick1);
    } else if (event.key == "w") {
        play(kick2);
    }
});