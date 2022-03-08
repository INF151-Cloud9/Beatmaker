//LOOPS
var atlantis = new Audio(encodeURIComponent("Samples/LOOPS/atlantis 160 Cm.wav"));
var comingDown = new Audio(encodeURIComponent("Samples/LOOPS/coming down 130 C#.wav"));
var digitalGM = new Audio(encodeURIComponent("Samples/LOOPS/DIGITAL - 3v1 - 148-BPM - Gm.wav"));
var digitalAM = new Audio(encodeURIComponent("Samples/LOOPS/DIGITAL - 5v1 - 140-BPM - Am.wav"));
var digitalFM = new Audio(encodeURIComponent("Samples/LOOPS/DIGITAL - 22v1 - 150-BPM - Fm.wav"));


//Sets all loops' background back to default color.
//When you select a new loop, it'll change the previously selected
//back to default.
function resetLoopsBackground() {
    var loops = document.getElementsByClassName("loops");
    for (var i = 0; i < loops.length; i++) {
        loops[i].style.backgroundColor = "rgb(39, 63, 83)";
    }
}

var currentLoop = null;
var currentPlaying = false;

//Plays a loop.
function playLoop(loop, id) {
    //If the current loop is clicked
    if (currentLoop == loop) { 
        //If current loop is already playing, clicking it again
        //will pause it.
        if (currentPlaying == true) { 
            currentPlaying = false;
            currentLoop.pause();
            currentLoop.currentTime = 0;
            document.getElementById(id).style.backgroundColor = "rgb(39, 63, 83)";
        } 
        //If current loop is not playing, clicking it will play it
        else {
            document.getElementById(id).style.backgroundColor = "rgb(58, 112, 119)";
            currentPlaying = true
            currentLoop.play();
        }
        return;
    //If current loop is different than the clicked loop,
    //pause the current loop
    } else if (currentLoop != null) {
        currentLoop.pause();
        currentLoop.currentTime = 0;
    }
    //Changes the current loop to a new loop and plays it
    resetLoopsBackground();
    document.getElementById(id).style.backgroundColor = "rgb(58, 112, 119)";
    currentLoop = loop;
    currentLoop.loop = true;
    currentLoop.play();
    currentPlaying = true;

}

//SOUNDBOARD SOUNDS
var kick1 = new Audio(encodeURIComponent("Samples/Kick/Kick - Boxcutter Kick.wav"));
var kick2 = new Audio(encodeURIComponent("Samples/Kick/Kick - Careless Kick - G#.wav"));
var kick3 = new Audio(encodeURIComponent("Samples/Kick/Kick - Tin Clip Kick - G.wav"));
var kick4 = new Audio(encodeURIComponent("Samples/Kick/Kick- Tape Noise Kick.wav"));

var hat1 = new Audio(encodeURIComponent("Samples/Hihat/Hat - Classic Hihat.wav"));
var hat2 = new Audio(encodeURIComponent("Samples/Hihat/Hat - Drill Hihat.wav"));
var hat3 = new Audio(encodeURIComponent("Samples/Hihat/Hat - Winter Open Hihat.wav"));

var snare1  = new Audio(encodeURIComponent("Samples/Snare/Snare - Drip Snare 1 - D#.wav"));
var snare2 = new Audio(encodeURIComponent("Samples/Snare/Snare - Rollerblade Snare - G.wav"));
var snare3 = new Audio(encodeURIComponent("Samples/Snare/Snare - Trap Snare - G.wav"));

var _808_1 = new Audio(encodeURIComponent("./Samples/808/808 - 808 Mini - C.wav"));
var _808_2 = new Audio(encodeURIComponent("Samples/808/808 - Apex 808 - C.wav"));
var _808_3 = new Audio(encodeURIComponent("Samples/808/808 - Blown 808 - C.wav"));
var _808_4 = new Audio(encodeURIComponent("Samples/808/808 - Crucial 808 - C.wav"));
var _808_5 = new Audio(encodeURIComponent("Samples/808/808 - Exhaust 808 - C.wav"));
var _808_6 = new Audio(encodeURIComponent("Samples/808/808- Sicko 808 - C.wav"));

var adrenaline_clap = new Audio(encodeURIComponent("Samples/Clap/Cymantics - Adrenaline Clap.wav"));
var multistack_clap = new Audio(encodeURIComponent("Samples/Clap/Cymantics - Multistack Clap.wav"));

var dimension_cymbal = new Audio(encodeURIComponent("Samples/Cymbal/Cymbal - Dimension Crash.wav"));
var gravel_cymbal = new Audio(encodeURIComponent("Cymbal- Gravel Crash.wav"));

var chill_guitar_19 = new Audio(encodeURIComponent("Samples/Guitar Samples/Guitar - Vibrations Chill Guitar Loop 19 - 150 BPM A Maj.wav"));
var chill_guitar_8 = new Audio(encodeURIComponent("Samples/Guitar Samples/Guitar - Vibrations Chill Guitar Loop 8 - 140 BPM D Maj.wav"));
var hiphop_guitar = new Audio(encodeURIComponent("Samples/Guitar Samples/Guitar - Vibrations Hip Hop Guitar Loop 18 - 160 BPM F Maj.wav"));
var pop_guitar = new Audio(encodeURIComponent("Samples/Guitar Samples/Guitar - Vibrations Pop Guitar Loop 6 - 100 BPM G Maj.wav"));

var breath_vox = new Audio(encodeURIComponent("Samples/Vocal/Vocal-Breath Vox.wav"));
var chihuahua_vox = new Audio(encodeURIComponent("Samples/Vocal/Vocal - Chihuahua Vox.wav"));



//Plays a soundboard sound
function play(sound) {
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', (event) => {
    //to prevent spamming of sounds when holding down a key
    if (!event.repeat) {
        loopInput(event);
        soundInput(event);
    }
});

function loopInput(event) {
    switch (event.key) {
        case "1":
            playLoop(comingDown, 'comingDown')
            break;
        case "2":
            playLoop(atlantis, 'atlantis')
            break;
        case "3":
            playLoop(digitalGM ,'gm')
            break;
        case "4":
            playLoop(digitalAM, 'am')
            break;
        case "5":
            playLoop(digitalFM, 'fm')
            break;
    }
}

function soundInput(event) {
    switch (event.key) {
        case 'q':
            play(kick1);
            
            break;
        case 'w':
            play(kick2);
            break;
        case 'e':
            play(kick3);
            break;
        case 'r':
            play(kick4);
            break;
        case 't':
            play(hat1);
            break;
        case 'y':
            play(hat2);
            break;
        case 'u':
            play(hat3);
            break;
        case 'i':
            play(snare1);
            break;
        case 'o':
            play(snare2);
            break;
        case 'p':
            play(snare3);
            break;
        case 'a':
            play(_808_1);
            break;
        case 's':
            play(_808_2);
            break;
        case 'd':
            play(_808_3);
            break;
        case 'f':
            play(_808_4);
            break;
        case 'g':
            play(_808_5);
            break;
        case 'h':
            play(_808_6);
            break;
        case 'j':
            play(chill_guitar_19);
            break;
        case 'k':
            play(chill_guitar_8);
            break;
        case 'l':
            play(hiphop_guitar);
            break;
        case 'z':
            play(adrenaline_clap);
            break;
        case 'x':
            play(multistack_clap);
            break;
        case 'c':
            play(dimension_cymbal);
            break;
        case 'v':
            play(gravel_cymbal);
            break;
        case 'b':
            play(breath_vox);
            break;
        case 'n':
            play(chihuahua_vox);
            break;
        case 'm':
            play(pop_guitar);
            break;
    }
}
