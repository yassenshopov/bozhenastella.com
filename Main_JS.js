function playSound() {

    var video = document.getElementById("video");
  
    video.muted = !video.muted;
  
}

function playVideo() {
    setTimeout(
        function() {
            document.getElementById("video").play();
        }, 1000);
}