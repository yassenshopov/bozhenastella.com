var click = true;

function animate_menu(x) {
    x.classList.toggle("change");
    click = !click;
    if (click == false) {
        document.getElementById("myNav").style.height = "100%";
        document.getElementById('body').style.overflowY = "hidden";
    } else {
        document.getElementById("myNav").style.height = "0%";
        document.getElementById('body').style.overflowY = "visible";
    }

}
