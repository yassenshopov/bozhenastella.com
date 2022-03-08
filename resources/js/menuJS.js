function onHoverMenu() {
    document.getElementById("dropMenu").style.display = "flex";
}

function onHoverAwayMenu() {
    document.getElementById("dropMenu").style.display = "none";
}

window.onscroll = function() {scrollFunc()};
function scrollFunc() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").className = "headerOnScroll";
        document.getElementById("topnav1").className = "topnavOnScroll";
        document.getElementById("topnav2").className = "topnavOnScroll";
        document.getElementById("topnav3").className = "topnavOnScroll";
        document.getElementById("bar1").style.backgroundColor = "#5c5861";
        document.getElementById("bar2").style.backgroundColor = "#5c5861";
        document.getElementById("bar3").style.backgroundColor = "#5c5861";
      } else {
        document.getElementById("header").className = "";
        document.getElementById("topnav1").className = "topnavOnScrollUp";
        document.getElementById("topnav2").className = "topnavOnScrollUp";
        document.getElementById("topnav3").className = "topnavOnScrollUp";
        document.getElementById("bar1").style.backgroundColor = "#e1e1e4";
        document.getElementById("bar2").style.backgroundColor = "#e1e1e4";
        document.getElementById("bar3").style.backgroundColor = "#e1e1e4";
      }

}

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