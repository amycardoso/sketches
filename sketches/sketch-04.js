const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
	dimensions: [1080, 1080]
};

const PALETTE = [
	["#0cecdd"],
	["#fff338"],
	["#ff67e7"],
	["#c400ff"],
];

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = 'black';
		context.fillRect(0, 0, width, height);

		const cx = width * 0.5;
		const cy = height * 0.5;

		const w = width * 0.01;
		const h = height * 0.1;
		let x, y;

		const num = 30;
		const radius = width * 0.3;

		for (let i = 0; i < num; i++) {
			const slice = math.degToRad(360 / num);
			const angle = slice * i;

			x = cx + radius * Math.sin(angle);
			y = cy + radius * Math.cos(angle);

			context.save();
			context.translate(cx, cy);
			context.rotate(-angle);

			context.lineWidth = random.range(5, 15);

			context.beginPath();
			context.arc(0, 0, radius * random.range(0, 1.3), slice * random.range(8, -20), slice * random.range(1, 4));
			context.strokeStyle = random.pick(PALETTE);
			context.stroke();

			context.restore();
		}
	};
};

canvasSketch(sketch, settings);
