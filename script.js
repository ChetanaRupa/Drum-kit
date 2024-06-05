// script.js
const drumImages = document.querySelectorAll('.drum-image');

drumImages.forEach((image) => {
    image.addEventListener('click', () => {
        const sound = image.id;
        playSound(sound);
    });
});

function playSound(sound) {
    let audioFile;
    switch (sound) {
        case 'kick':
            audioFile = new Audio('kick.wav');
            audioFile.play();
            break;
        case 'snare':
            audioFile = new Audio('snare.wav');
            audioFile.play();
            break;
        case 'hithat':
            audioFile = new Audio('hithat.wav');
            audioFile.play();
            break;
        case 'crash':
            audioFile = new Audio('crash.wav');
            audioFile.play();
            break;
        case 'tom':
            audioFile = new Audio('tom.wav');
            audioFile.play();
            break;
    }
}
