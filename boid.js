class Boid {
    constructor() {
        this.position = createVector();
        this.velocity = createVector();
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity);
        this.position.add(this.acceleration);
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
        
    }
}


// Make a 3D version, see what happens with a 4D version