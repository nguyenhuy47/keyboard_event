function moveUp() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + "px";

}

function moveDown() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + "px";

}

function moveLeft() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + "px";

}

function moveRight() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + "px";

}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);

}
