const flock = [];

function setup() {
    createCanvas(640, 640);
    for (let i = 1; i <= 200; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(51);
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}