function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    line(width/2, 0, width/2, height);
    line(0, width/2, height, width/2);
  
    stroke('#979DA6');
    strokeWeight(10);
    for(let posX=0; posX<10; posX++) {
        line(posX * 25, 0, posX * 25, height/2);
    }
  
    fill('#F2E205');
    noStroke();
    for (let posX = 0; posX < 10; posX++) {
      for (let posY = 0; posY < 10; posY++) {
        if (posX % 2 === 0) {
         circle(width / 2 + 10 + posX * 25, 20 + posY * 25, 10);
        } else {
          circle(width / 2 + 10 + posX * 25, 10 + posY * 25, 10);
        }
      }
    }
  
    fill('#F2EEB3');
    for (let posX = 0; posX < 10; posX++) {
      for (let posY = 0; posY < 5; posY++) {
        if (posX % 2 === 0) {
          square(posX * 25, height / 2 + posY * 50 + 25, 25);
        } else {
          square(posX * 25, height / 2 + posY * 50, 25);
        }
      }
    }
  
    stroke('#F2D64B');
    strokeWeight(10);
    for (let i = 0; i < 10; i++) {
      line(width / 2, height - i * 25, width / 2 + i * 25, height);
      line(width / 2 + i * 25, height / 2, width, height - i * 25);
    }
  
    stroke('#68788C');
    line(width / 2, 0, width / 2, height);
    line(0, height/2, width, height/2);
  
    line(0, 0, width, 0);
    line(0, height, width, height);
    line(0, 0, 0, height);
    line(width, 0, width, height);
  }