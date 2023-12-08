// Attributs
let context;
let voiture;

/**
 * Fonction principale
 */
bg;
voiture;
buisson;
arbreback;
arbrefront;
montagne;
nuage;
function draw() {
    console.log("Drawing canvas...")
    


    let canvas = document.getElementById("main-canvas")
    let canvasContainer = document.getElementById("canvas-container")

    let context = canvas.getContext("2d")
    const root = new CanvasManager(context, canvas.width, canvas.height)

    bg = new Rectangle(0, 0, 2000, canvas.height, "rgb(0, 151, 230)")
    voiture = new CanvasImage(canvas.width+100, canvas.height - 95, "./img/voiture.png")
    buisson = new CanvasImage(0, canvas.height - 150, "./img/buisson.png")
    buisson2 = new CanvasImage(buisson.image.width * 1.5, canvas.height - 150, "./img/buisson.png")
    arbreback = new CanvasImage(0, canvas.height - 230, "./img/arbreback.png")
    arbreback2 = new CanvasImage(arbreback.image.width * 0.5, canvas.height - 230, "./img/arbreback.png")
    arbrefront = new CanvasImage(-80, canvas.height - 230, "./img/arbrefront.png")
    arbrefront2 = new CanvasImage(-80 + arbrefront.image.width * 0.5, canvas.height - 230, "./img/arbrefront.png")
    montagne = new CanvasImage(0, -200, "./img/montagne.png")
    montagne2 = new CanvasImage(montagne.image.width, -200, "./img/montagne.png")
    nuage = new CanvasImage(0, 0, "./img/nuage.png")
    nuage2 = new CanvasImage(nuage.image.width * 0.5, 0, "./img/nuage.png")

    // Back
    root.addObject(bg)
    root.addObject(nuage)
    root.addObject(nuage2)
    nuage.setTheScale(0.5)
    nuage2.setTheScale(0.5)
    root.addObject(montagne)
    root.addObject(montagne2)
    root.addObject(arbreback)
    root.addObject(arbreback2)
    arbreback.setTheScale(0.5)
    arbreback2.setTheScale(0.5)
    root.addObject(arbrefront)
    root.addObject(arbrefront2)
    arbrefront.setTheScale(0.5)
    arbrefront2.setTheScale(0.5)
    root.addObject(buisson)
    root.addObject(buisson2)
    buisson.setTheScale(1.5)
    buisson2.setTheScale(1.5)
    
    
    // Middle
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

function moveCar(duration, distance) {
    if(arbreback.x <= -arbreback.image.width * 0.5) arbreback.x += 2 * arbreback.image.width * 0.5
    if(arbreback2.x <= -arbreback2.image.width * 0.5) arbreback2.x += 2 * arbreback2.image.width * 0.5

    if(buisson.x <= -buisson.image.width * 1.5) buisson.x += 2 * buisson.image.width * 1.5
    if(buisson2.x <= -buisson2.image.width * 1.5) buisson2.x += 2 * buisson2.image.width * 1.5
    
    if(montagne.x <= -montagne.image.width) montagne.x += 2 * montagne.image.width
    if(montagne2.x <= -montagne2.image.width) montagne2.x += 2 * montagne2.image.width

    if(arbrefront.x <= -arbrefront.image.width * 0.5) arbrefront.x += 2 * arbrefront.image.width * 0.5
    if(arbrefront2.x <= -arbrefront.image.width * 0.5) arbrefront2.x += 2 * arbrefront.image.width * 0.5

    if(nuage.x <= -nuage.image.width * 0.5) nuage.x += 2 * nuage.image.width * 0.5
    if(nuage2.x <= -nuage2.image.width * 0.5) nuage2.x += 2 * nuage.image.width * 0.5

    voiture.animateOnce(function(x, c) {
        voiture.y = Math.sin(x * 50)*2 + c[1]
    }, 0, duration)

    buisson.animateOnce(function(x, c) {
        buisson.x = c[0] + (-distance) * x
    }, 0, duration)

    buisson2.animateOnce(function(x, c) {
        buisson2.x = c[0] + (-distance) * x
    }, 0, duration)

    arbreback.animateOnce(function(x, c) {
        arbreback.x = c[0] + (-distance/2.5) * x
    }, 0, duration)

    arbreback2.animateOnce(function(x, c) {
        arbreback2.x = c[0] + (-distance/2.5) * x
    }, 0, duration)

    arbrefront.animateOnce(function(x, c) {
        arbrefront.x = c[0] + (-distance/2) * x
    }, 0, duration)

    arbrefront2.animateOnce(function(x, c) {
        arbrefront2.x = c[0] + (-distance/2) * x
    }, 0, duration)

    montagne.animateOnce(function(x, c) {
        montagne.x = c[0] + (-distance/3) * x
    }, 0, duration)

    montagne2.animateOnce(function(x, c) {
        montagne2.x = c[0] + (-distance/3) * x
    }, 0, duration)

    nuage.animateOnce(function(x, c) {
        nuage.x = c[0] + (-distance/4) * x
    }, 0, duration)

    nuage2.animateOnce(function(x, c) {
        nuage2.x = c[0] + (-distance/4) * x
    }, 0, duration)
    
}