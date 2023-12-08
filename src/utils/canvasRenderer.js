function drawSquare(context, x, y, size, color)  {
    context.fillStyle=color;
    context.fillRect(x, y, size, size);
}

function drawRectangle(context, x, y, w, h) {
    context.fillStyle=color;
    context.fillRect(x, y, w, h);
    
}

function drawImage(context, x, y, img) {
    context.drawImage(img, x, y);
    
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
    rotation = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        CanvasObject.id++;
        this.instanceId = CanvasObject.id;
    }
    

    render(context) {
        context.translate(this.x, this.y)
        context.rotate(this.rotation)
        context.translate(-this.x, -this.y)
    }

    move(deltaX, deltaY) {
        this.x += deltaX
        this.y += deltaY
    }

    rotate(degree) {
        this.rotation = degree * (Math.PI/180)
    }

    endRender(context) {
        context.translate(this.x, this.y)
        context.rotate(-this.rotation)
        context.translate(-this.x, -this.y)
    }

    animateOnce(animation, delay, duration) {
        var step = 1/duration
        var current = 0;

        var cx = this.x
        var cy = this.y
        var crot = this.rotation

        var inter = setInterval(() => {
            current += step;
            console.log(current)
            if(current > 1) {
                return;
            }

            animation(easeInOutQuart(current), [cx, cy, crot])
        }, 1)
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
        super.render(context)
        drawSquare(context, this.x, this.y, this.size, this.color)
        this.endRender(context)
    }
}

class CanvasImage extends CanvasObject {

    image;
    constructor(x, y, url) {
        super(x, y)
        this.url = url;

        this.image = new Image()
        this.isLoaded = false;

        this.image.onload = () => {
            this.isLoaded = true
        }
        this.image.src = url;
    }

    render(context) {
        if(this.isLoaded) {
            super.render(context)
            drawImage(context, this.x, this.y, this.image)
            this.endRender(context)
        }
    }
}


/**
 * Easing
 */
function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}