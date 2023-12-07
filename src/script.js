function showCanvas(){
    canvasContainer = document.getElementById("canvas-container")
    contentContainer = document.getElementById("content-container")

    canvasContainer.classList.remove("up")
    contentContainer.classList.remove("up")
}

function showContent(){
    canvasContainer = document.getElementById("canvas-container")
    contentContainer = document.getElementById("content-container")

    canvasContainer.classList.add("up")
    contentContainer.classList.add("up")
}