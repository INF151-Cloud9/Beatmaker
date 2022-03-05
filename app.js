const kick1 = new Tone.Player({
    "url" : "./808-808_Mini-C.wav"
}).toMaster();

const vocal1 = new Tone.Player({
    "url" : "./Vocal-Breath_Vox.wav"
}).toMaster();


var kick = new Audio('./808-808_Mini-C.wav');
var vocal = new Audio('./Vocal-Breath_Vox.wav');

function play(sound) {
    
    // sound.play();
    sound.start();
}

document.addEventListener('keydown', (test) => {
    if (test.key == 'q') {
        
        play(kick1);
    } else if (test.key == "w") {
        play(vocal1);
    }
});

