const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

const PALETTE = [
  ["#F25C69"],
  ["#025373"],
  ["#F2D785"],
  ["#F2B33D"],
];

const initAxe = 5;
const maxSize = 45;
let x = initAxe;
let y = initAxe;

const circleRadius = [5, 20];
const rectSize = [10, 35];

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, width, height);

    let maxObjects = height * (height / maxSize);
    for (let i = 0; i < maxObjects; i++) {
      const color = random.pick(PALETTE);

      if (random.range(1) < 0.8) {
        if (random.range(1) < 0.5) {
          const radius = random.range(circleRadius[0], circleRadius[1]);
          context.beginPath();
          context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
          context.fillStyle = color;
          context.fill();
        } else {
          const size = random.range(rectSize[0], rectSize[1]);
          context.beginPath();
          context.fillStyle = color;
          context.fillRect(x, y, size, size);
          context.stroke();
        }
      }

      x += maxSize;
      if (x > width) {
        x = initAxe;
        y += maxSize;
      }

    }

  };
};

canvasSketch(sketch, settings);
