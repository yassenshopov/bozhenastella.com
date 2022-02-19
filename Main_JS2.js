var click = true;

function animate_menu(x) {
    x.classList.toggle("change");
    click = !click;
    if (click == false) {
        document.getElementById("myNav").style.height = "100%";
    } else {
        document.getElementById("myNav").style.height = "0%";
    }
    
}

function playSound() {

    var video = document.getElementById("video");
  
    video.muted = !video.muted;
  
}

window.onscroll = function() {scrollFunc()};
function scrollFunc() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").className = "headerOnScroll";
        document.getElementsByClassName("topnav").style.color = "#1f1e1e";
      } else {
        document.getElementById("header").className = "";
      }

}