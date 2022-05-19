import React from 'react';
import Sketch from 'react-p5';
import { Engine, Runner, Bodies, Body, Composite, Events } from 'matter-js';
import Ball from './Ball';
import InnerObject from './InnerObject';
import BallsData from './BallsData';

import ballImage1 from '../../../assets/img/canvas images/ball_1_2.png';
import ballImage2 from '../../../assets/img/canvas images/ball_3_2.png';
import ballImage3 from '../../../assets/img/canvas images/ball_2_2.png';

import shape0 from '../../../assets/img/canvas images/shapes/0.svg';
import shape1 from '../../../assets/img/canvas images/shapes/1.svg';
import shape2 from '../../../assets/img/canvas images/shapes/2.svg';
import shape3 from '../../../assets/img/canvas images/shapes/3.svg';
import shape4 from '../../../assets/img/canvas images/shapes/4.svg';
import shape5 from '../../../assets/img/canvas images/shapes/5.svg';

let safeArea = {
    min: 0,
    max: 100,
    width: 100,
}

let balls = [];
let innerObjects = [];
let engine;
let world;

let objectsScale = 1;
let isPortrait = false;

function Canvas() {

    const ballImages = [ballImage1, ballImage2, ballImage3];
    const shapeImages = [shape0, shape1, shape2, shape3, shape2, shape4, shape5, shape3];

    const ballsData = BallsData;

    const setup = (p5, canvasParentRef) => {

        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

        //define objects' size scale based on viewport dimensions
        if (p5.width > p5.height) {
            objectsScale = p5.width / 1500;
        } else {
            isPortrait = true;
            objectsScale = p5.height / 1500;
        }
        //define safe viewport area in which render the objects
        safeArea.min = 0 + ballsData[0].size * objectsScale / 2;
        safeArea.max = p5.width - ballsData[0].size * objectsScale / 2;
        safeArea.width = safeArea.max - safeArea.min;

        //setup p5 options
        p5.rectMode(p5.CENTER);
        p5.ellipseMode(p5.CENTER);
        p5.imageMode(p5.CENTER);

        //setup matter.js engine
        engine = Engine.create();
        //0.001; <---- default value
        engine.gravity.scale = 0.0008;
        world = engine.world;
        let ground = Bodies.rectangle(p5.width / 2, p5.height - 5, p5.width, 10, {isStatic: true, friction: 0});
        let wall1 = Bodies.rectangle(-5, p5.height/2, 10, 3 * p5.height, {isStatic: true, friction: 0});
        let wall2 = Bodies.rectangle(p5.width + 5, p5.height/2, 10, 3 * p5.height, {isStatic: true, friction: 0});

        let innerShapesCount = 0;
        //load ball images
        for (let i = 0; i < ballsData.length; i++){
            ballsData[i].image = p5.loadImage(ballImages[i]);
            for (let j = innerShapesCount; j < innerShapesCount + ballsData[i].innerObjects.length; j++) {
                ballsData[i].innerObjects[j - innerShapesCount].image = p5.loadImage(shapeImages[j]);
            }
            innerShapesCount+= ballsData[i].innerObjects.length;
        }

        //create ball objects
        for (let i = 0; i < ballsData.length; i++) {
            let newBall = new Ball({_size: ballsData[i].size * objectsScale, _image: ballsData[i].image});
            newBall.createBody();

            let yOffset = 0;
            if (isPortrait) {
                yOffset = ballsData[i].position.y * objectsScale;
            }

            Body.translate(newBall.body, {x: safeArea.min + ballsData[i].position.x * safeArea.width, y: - newBall.size / 2 - yOffset});
            balls.push(newBall);

            //create inner objects
            ballsData[i].innerObjects.forEach(( obj ) => {
                let newInner = new InnerObject({_parent: balls[i], _x: obj.x, _y: obj.y, _sides: obj.sides, _width: obj.width * objectsScale, _height: obj.height * objectsScale, _image: obj.image});
                newInner.createBody();
                innerObjects.push(newInner);
            })
        }


        balls.forEach((ball) => {
            Composite.add(world, ball.body);
        });

        innerObjects.forEach((obj) => {
            Composite.add(world, obj.body);
        });

        Events.on(engine, 'beforeUpdate', function() {
        var gravity = engine.world.gravity;

        innerObjects.forEach((obj) => {
            Body.applyForce(obj.body, obj.body.position, {
            x: -gravity.x * gravity.scale * obj.body.mass,
            y: -gravity.y * gravity.scale * obj.body.mass
        });
        })
        
});

        //run matter.js engine after the heading animation
        Composite.add(world, [ground, wall1, wall2]);
        setTimeout(() => {
            Runner.run(engine);
            for (let i = 0; i < ballsData.length; i++) {
            Body.setVelocity(balls[i].body, ballsData[i].initialVelocity);
        }
        }, 1000);
    }

    const draw = (p5) => {
        p5.clear();
        innerObjects.forEach((obj) => {
            obj.display( p5 );
        });
        balls.forEach((ball) => {
            ball.display( p5 );
            ball.repel( p5, 0.1);
        });
        
    }


  return <Sketch setup={setup} draw={draw}/>
}

export default Canvas;
