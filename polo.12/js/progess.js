var i = 0;
function move() {
    if (i == 94) {
        i = 1;
        var elem = document.getElementByClassName("progress-bar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}