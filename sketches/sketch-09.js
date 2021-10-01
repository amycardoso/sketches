const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1080, 1080]
};

let x = 0;
let y = 0;
let spacing = 20;
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.01;
    let maxObjects = width * spacing;
    console.log(maxObjects)
    for (let i = 0; i <= maxObjects; i++) {

      if (random.range(1) < 0.5) {
        context.beginPath();
        context.rect(x, y, 20, 20);
        context.stroke();
      } else {
        
      }
      console.log(x)
      console.log(y)
      x += spacing;
      if (x > width) {
        x = 0;
        y += spacing;
      }
    }
   
  };
};

canvasSketch(sketch, settings);
