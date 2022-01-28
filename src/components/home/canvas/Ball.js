import { Bodies, Body } from 'matter-js';

class Ball {

    constructor({_size = 50, _parts = [], _image = null}) {
        this.size = _size;
        this.parts = _parts;
        this.image = _image;
        this.body = null;
        this.angle = 18 * (Math.PI/180);
    }

    createBody() {

        for (let i = 0; i < 20; i++) {
           let newRect = Bodies.rectangle(0, 0, 2 * this.size / 2 * Math.tan(this.angle/2), 20, {isStatic: true, density: 0.0001, friction: 0.5, restitution: 0});
           Body.translate(newRect, {x: 0, y: -this.size / 2});
           Body.rotate(newRect, this.angle * i, {x: 0, y: 0});
           this.parts.push(newRect);
        }

        this.body = Body.create({parts: this.parts, density: 0.0001, friction: 0, restitution: 0.7, frictionAir: 0.0005});
    }

    display( p5 ) {
        p5.push();
        p5.translate(this.body.position.x, this.body.position.y);
        p5.rotate(this.body.angle);
        p5.image(this.image, 0, 0, this.size - Math.abs(this.body.velocity.y) * this.size * 0.003, this.size + Math.abs(this.body.velocity.y) * this.size * 0.003);
        p5.pop();
    }

    repel( p5, gForce ) {
        let dx = this.body.position.x - p5.mouseX;
        let dy = this.body.position.y - p5.mouseY;
        let distance = Math.sqrt(dx * dx + dy * dy) - this.size / 2;
        let minDistance = this.size / 2 + 100;

        if (distance < minDistance) {
            let direction = p5.createVector(dx, dy);
            direction.normalize();

            if (distance < 10) {
                distance = 10;
            }
            Body.applyForce(this.body, {x: p5.mouseX, y: p5.mouseY}, {x: direction.x / distance * gForce, y: direction.y / distance * gForce / 2});
        }

    }
}

export default Ball