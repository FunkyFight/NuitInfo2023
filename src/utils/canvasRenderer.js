function drawSquare(context, x, y, size, color)  {
    context.fillStyle=color;
    context.fillRect(x, y, size, size);
}

function drawRectangle(context, x, y, w, h) {
    context.fillStyle=color;
    context.fillRect(x, y, w, h);
    
}


class CanvasManager {

    
    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;

        // System
        this.objects = []
    }

    addObject(object) {
        this.objects.push(object)
    }

    removeObject(object) {
        this.objects = this.objects.filter(obj => obj.instanceId == object.instanceId)
    }

    renderAll() {
        this.context.clearRect(0, 0, this.width, this.height);
        
        for(let object of this.objects) {
            console.log(object)
            object.render(this.context);
        }
    }

}

/**
 * Objet
 */
class CanvasObject {

    static id = 0;
    
    instanceId = -1;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        CanvasObject.id++;
        this.instanceId = CanvasObject.id;
    }

    render(context) {

    }

    move(deltaX, deltaY) {
        this.x += deltaX
        this.y += deltaY
    }
}

/**
 * Carré, hérite de objet
 */
class Square extends CanvasObject {

    constructor(x, y, size, color) {
        super(x, y)
        this.size = size;
        this.color = color;
    }

    render(context) {
        drawSquare(context, this.x, this.y, this.size, this.color)
    }

    
}