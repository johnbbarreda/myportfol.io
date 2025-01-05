// Function to request fullscreen when the video container is clicked
function requestFullscreen(element) {
    var iframe = element.querySelector('iframe');
    
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

    // Autoplay the video when clicked
    var video = iframe;
    var autoplayURL = iframe.src.includes("autoplay=1") ? iframe.src : iframe.src + "?autoplay=1";
    iframe.src = autoplayURL;
}
