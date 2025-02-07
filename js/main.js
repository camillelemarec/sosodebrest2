document.addEventListener('DOMContentLoaded', () => {
    const sosoImage = document.getElementById('soso-image');
    const sosoAudio = document.getElementById('soso-audio');
    const stopButton = document.getElementById('stop-button');
    let isPlaying = false;

    function playAudio() {
        sosoAudio.currentTime = 0;
        sosoAudio.play();
        isPlaying = true;
        stopButton.classList.remove('hidden');
    }

    function stopAudio() {
        sosoAudio.pause();
        sosoAudio.currentTime = 0;
        isPlaying = false;
        stopButton.classList.add('hidden');
    }

    sosoImage.addEventListener('click', () => {
        if (!isPlaying) {
            playAudio();
        } else {
            stopAudio();
        }
    });

    stopButton.addEventListener('click', stopAudio);

    sosoAudio.addEventListener('ended', () => {
        isPlaying = false;
        stopButton.classList.add('hidden');
    });

    sosoAudio.addEventListener('error', (e) => {
        console.error('Erreur de chargement audio:', e);
        alert('Désolé, impossible de charger le son !');
    });
}); 