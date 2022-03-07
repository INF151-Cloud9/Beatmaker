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
var kick1 = new Audio(encodeURIComponent("./Samples/808/808 - 808 Mini - C.wav"));
var kick2 = new Audio(encodeURIComponent("Samples/808/808 - Apex 808 - C.wav"));
var kick3;
var kick4;

var hat1 = new Audio(encodeURIComponent("Samples/Hihat/Hat - Classic Hihat.wav"));

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
            break;
        case 'r':
            play(hat1);
            break;
        case 't':
            break;
        case 'y':
            break;
        case 'u':
            break;
        case 'i':
            break;
        case 'o':
            break;
        case 'p':
            break;
        case 'a':
            break;
        case 's':
            break;
        case 'd':
            break;
        case 'f':
            break;
        case 'g':
            break;
        case 'h':
            break;
        case 'j':
            break;
        case 'k':
            break;
        case 'l':
            break;
        case 'z':
            break;
        case 'x':
            break;
        case 'c':
            break;
        case 'v':
            break;
        case 'b':
            break;
        case 'n':
            break;
        case 'm':
            break;
    }
}