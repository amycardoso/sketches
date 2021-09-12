const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
	dimensions: [1080, 1080]
};

const PALETTE = [
	["#170055"],
	["#3E00FF"],
	["#AE00FB"],
	["#B5FFD9"],
];

const circles = [];
const minRadius = 2;
const maxRadius = 100;
const totalCircles = 1000;
const createAttempts = totalCircles / 10;

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = '#F8F8F8';
		context.fillRect(0, 0, width, height);

		for (var i = 0; i < totalCircles; i++) {
			let newCircle;
			for (var tries = 0; tries < createAttempts; tries++) {
				newCircle = new Circle(random.range(0, width), random.range(0, height));

				if (newCircle.willCollide(width, height)) {
					continue;
				} else {
					break;
				}
			}

			for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
				newCircle.radius = radiusSize;
				if (newCircle.willCollide(width, height)) {
					newCircle.radius--;
					break;
				}
			}

			circles.push(newCircle);
			context.beginPath();
			context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI);
			context.fillStyle = random.pick(PALETTE);
			context.fill();
		}
	};
};

canvasSketch(sketch, settings);

class Circle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.radius = minRadius;
	}

	willCollide(width, height) {
		for (let i = 0; i < circles.length; i++) {
			const otherCircle = circles[i];
			const sumRadius = this.radius + otherCircle.radius;
			const dx = this.x - otherCircle.x;
			const dy = this.y - otherCircle.y;

			if (sumRadius >= Math.sqrt((dx * dx) + (dy * dy))) {
				return true;
			}
		}

		if (this.x + this.radius >= width ||
			this.x - this.radius <= minRadius) {
			return true;
		}

		if (this.y + this.radius >= height ||
			this.y - this.radius <= minRadius) {
			return true;
		}

		return false;
	}
}
