document.addEventListener('DOMContentLoaded', function () {
    const backgroundAudio = document.getElementById('background-audio');
    const toggleAudioBtn = document.getElementById('toggleAudioBtn');
    const videos = document.querySelectorAll('video');

    // Add an event listener for the button click
    toggleAudioBtn.addEventListener('click', function () {
        // Toggle between play and pause for the background audio
        if (backgroundAudio.paused) {
            backgroundAudio.play();
        } else {
            backgroundAudio.pause();
        }
    });

    // Pause background audio when a video starts playing
    videos.forEach(video => {
        video.addEventListener('play', function () {
            backgroundAudio.pause();
        });

        // Resume background audio when a video ends
        video.addEventListener('pause', function () {
            backgroundAudio.play();
        });
    });
});