const dot = document.querySelector("#dot");

let positionX = 0;
let positionY = 0;

window.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case "ArrowUp":
            positionY -= 20;
            console.log('up');
            break;
        case "ArrowDown":
            positionY += 20;
            console.log('down');
            break;
        case "ArrowLeft":
            positionX -= 20;
            console.log('Left');
            break;
        case "ArrowRight":
            positionX += 20;
            console.log('Right');
            break;
        default:
            console.log('DON\'T MOVE');
    }
    dot.style.top = positionY + "px" ;
    dot.style.left = positionX + "px";
})