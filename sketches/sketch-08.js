const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};
let x = 0;
let y = 0;
let spacing = 20;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    const w = width * 0.10;
    const h = height * 0.10;
    const maxNumber = width/10;
    for (let i = 0; i < maxNumber; i++) {
      console.log(x);
      console.log(y);

      context.beginPath();
      context.rect(x, y, w, h);
      context.stroke();
     
  
      x += spacing;
      if (x > width) {
        x = 0;
        y += spacing;
      }
    }
  
  };
};

canvasSketch(sketch, settings);
