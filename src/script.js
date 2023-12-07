function showCanvas(){
    let canvasContainer = document.getElementById("canvas-container")
    let contentContainer = document.getElementById("content-container")

    canvasContainer.classList.remove("up")
    contentContainer.classList.remove("up")
}

function showContent(){
    let canvasContainer = document.getElementById("canvas-container")
    let contentContainer = document.getElementById("content-container")

    canvasContainer.classList.add("up")
    contentContainer.classList.add("up")
}