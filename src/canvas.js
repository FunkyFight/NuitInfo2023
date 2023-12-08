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

    let context = canvas.getContext("2d")
    const root = new CanvasManager(context, canvas.width, canvas.height)

    voiture = new CanvasImage(2, 2, "./img/voiture.png")
    root.addObject(voiture)


    setInterval(function() {
        canvas.setAttribute("width", canvasContainer.offsetWidth)
        canvas.setAttribute("height", canvasContainer.offsetHeight)
        root.renderAll()
        
    }, 10)


    
}

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
let konamiIndex = 0;
document.onkeydown = function(ev) {
    if(ev.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log(ev.key)
    } else konamiIndex = 0;

    if(konamiIndex == konamiCode.length) window.location.replace("http://www.w3schools.com");
}