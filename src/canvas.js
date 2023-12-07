// Attributs
let context;
let square;

/**
 * Fonction principale
 */
function draw() {
    console.log("Drawing canvas...")
    


    let canvas = document.getElementById("main-canvas")
    let canvasContainer = document.getElementById("canvas-container")

    canvas.setAttribute("width", canvasContainer.offsetWidth)
    canvas.setAttribute("height", canvasContainer.offsetHeight)

    let context = canvas.getContext("2d")
    const root = new CanvasManager(context, canvas.width, canvas.height)

    square = new Square(10, 10, 50, "rgb(253, 121, 168)");
    root.addObject(square)


    setInterval(function() {
        root.renderAll()
    }, 10)
}

document.onkeydown = function(ev) {
    if(ev.code == "ArrowRight") {
        console.log("Right")
        square.move(5, 0)
    }
}