import { Bodies, Events} from 'matter-js';

class InnerObject {
    constructor({_parent = null, _x= 0, _y = 0, _width = 50, _height = 50, _parts = [], _image = null, _sides = 4}) {
        this.body = null;
        this.parent = _parent;
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.parts = _parts;
        this.image = _image;
        this.sides = _sides;
    }

    createBody() {
        let parentX = this.parent.body.position.x;
        let parentY = this.parent.body.position.y;

        let parentSize = this.parent.size;
        let friction = 0.001;

        if (this.sides === 4) {
            this.body = Bodies.rectangle(parentX - parentSize / 1.8 + this.width / 2 + (this.x * (parentSize * 0.9 - this.width / 2)),
            parentY - parentSize / 1.8 + this.height / 2 + (this.y * (parentSize * 0.9 - this.height / 2)),
            this.width, this.height, 
            {density: 0.00005, friction: 0.001, restitution: 0.01, frictionAir: 0.006});
        } else {

            this.body = Bodies.polygon(
                parentX - parentSize / 1.8 + this.width / 2 + (this.x * (parentSize * 0.9 - this.width / 2)),
                parentY - parentSize / 1.8 + this.height / 2 + (this.y * (parentSize * 0.9 - this.height / 2)),
                this.sides, 
                this.width / 2, 
                {density: 0.00005, friction: 0.8, restitution: 0, frictionAir: 0.05}
            );
        }
    }

    display( p5 ) {
            p5.push();
            p5.translate(this.body.position.x, this.body.position.y);
            p5.rotate(this.body.angle);
            p5.image(this.image, 0, 0, this.width, this.height);
            p5.pop();
    }
}

export default InnerObject