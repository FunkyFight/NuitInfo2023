// Attributs
let context;
let voiture;

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

    voiture = new CanvasImage(2, 2, "./img/voiture.png")
    root.addObject(voiture)


    setInterval(function() {
        root.renderAll()
    }, 10)


    
}

document.onkeydown = function(ev) {
    switch(ev.code) {
        case "ArrowRight":
            voiture.move(5, 0)
            break;
        case "ArrowLeft":
            voiture.move(-5, 0)
            break;
    }
}