let myAudio = new Audio();
document.addEventListener('keydown', function (e) {
    if (e.key == "a") {
        element = document.getElementById("a");
        myAudio.src = './audio/clap.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);

    } else if (e.key == "s") {
        element = document.getElementById("s");
        myAudio.src = './audio/hihat.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "d") {
        element = document.getElementById("d");
        myAudio.src = './audio/kick.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
            
        }, 100);
    } else if (e.key == "f") {
        element = document.getElementById("f");
        myAudio.src = './audio/openhat.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "g") {
        element = document.getElementById("g");
        myAudio.src = './audio/boom.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "h") {
        element = document.getElementById("h");
        myAudio.src = './audio/ride.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "j") {
        element = document.getElementById("j");
        element.classList.add("border-change");
        myAudio.src = './audio/snare.wav';
        myAudio.autoplay = true;
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "k") {
        element = document.getElementById("k");
        myAudio.src = './audio/tom.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else if (e.key == "l") {
        element = document.getElementById("l");
        myAudio.src = './audio/tink.wav';
        myAudio.autoplay = true;
        element.classList.add("border-change");
        setTimeout(() => {
            element.classList.remove("border-change");
        }, 100);
    } else {}
});