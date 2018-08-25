function makeTopElem(elems, top = true) {
    let zIndex = top ? 1 : 0;
    let color = top ? "#3b4b72" : "#4e555b";

    elems.css("z-index", zIndex)
        .css("border-color", color)
        .css("border-width", "5px");
}

function initDraggableComponents() {
    let draggables = $(".draggable");

    makeTopElem(draggables, false);

    draggables.draggable()
        .mousedown(function () {
            makeTopElem(draggables, false);
            makeTopElem($(this))
        });
}

$(document).ready(function () {
    initDraggableComponents();
});