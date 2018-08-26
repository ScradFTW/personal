function drawCode(data, canvas, ctx) {

    //making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let font_size = 12;

    ctx.font = font_size + "px monospace";
    //chinese characters - taken from the unicode charset
    let columns = canvas.width / font_size; //number of columns for the rain
    let rows = canvas.height / font_size;

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
            let rand = Math.random();
            let opacity = rand - ((r + 1) / rows);
            ctx.fillStyle = "rgba(0, 255, 0, " + opacity + ")";

            let token = data[Math.floor(rand * data.length)];
            ctx.fillText(token, c * font_size, r * font_size);
        }
    }
}

function makeTopElem(elems, top = true) {
    let zIndex = top ? 1 : 0;
    let color = top ? "#3b4b72" : "#4e555b";

    elems.css("z-index", zIndex)
        .css("border-color", color)
        .css("border-width", "5px");
}

function initDraggableComponents() {
    let draggables = $(".draggable");

    draggables.fadeIn(1000);

    makeTopElem(draggables, false);

    draggables.draggable()
        .mousedown(function () {
            makeTopElem(draggables, false);
            makeTopElem($(this))
        });
}

function initMatrix() {
    $.get("https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c",
        function (data) {
            let tokens = data.match(/\S+/g) || [];
            let canvas = document.getElementById("matrix");
            let ctx = canvas.getContext("2d");

            drawCode(tokens, canvas, ctx);

            setInterval(function () {
                // clear the canvas of previous data
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawCode(tokens, canvas, ctx);
            }, 250);
        }
    );
}

$(document).ready(function () {
    initDraggableComponents();
    initMatrix();
});