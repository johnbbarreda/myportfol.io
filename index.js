// Function to request fullscreen when the video container is clicked
function requestFullscreen(element) {
    const iframe = element.querySelector('iframe');
    
    if (iframe) {
        // Request fullscreen on the iframe element
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }

        // Autoplay the video by appending autoplay parameter if not present
        const src = iframe.src;
        if (!src.includes('autoplay=1')) {
            iframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;
        }
    }
}

// Optional: Add event listeners to video wrappers for better accessibility
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            requestFullscreen(wrapper);
        }
    });
});
