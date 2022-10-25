let coin;
let coin2;
let coin3;
let gravity;

function setup() {
  createCanvas(400, 400);
  coin = new Billiard();
  coin2 = new Billiard();
  coin3 = new Billiard();
}

function draw() {
  background(255);
  coin.applyForce(gravity);
  coin.update();
  coin.edges();
  coin.display();
  
  coin2.applyForce(gravity);
  coin2.update();
  coin2.edges();
  coin2.display2();
  
  coin3.applyForce(gravity);
  coin3.update();
  coin3.edges();
  coin3.display3();
  
  

  gravity = createVector(0, 1);
  

}

class Billiard {
  constructor(x, y, m) {
    this.pos = createVector(width / 2, height / 3);
    // this.vel = createVector(1, 1);
    this.vel = createVector(random(-1, 1), 0);
    // this.acc = createVector(0, 0);
    this.r = 20;
    

  }

  applyForce(force) {
    this.acc = force;
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    if (keyCode === DOWN_ARROW) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
  }

  display() {
    fill(255);
    line(width, height/3 - 50, 0, height/3 - 50);
    rect(width/2-40, height/3, width/4-20, 20);
    
    let c = color(255, 228, 0);
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    line(this.pos.x, this.pos.y + 8, this.pos.x, this.pos.y - 8);
  }
  
  display2() {
    fill(255);
    line(width, height/3 - 50, 0, height/3 - 50);
    rect(width/2-40, height/3, width/4-20, 20);
    
    let c = color(255, 228, 0);
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    line(this.pos.x, this.pos.y + 8, this.pos.x, this.pos.y - 8);
  }
  
  display3() {
    fill(255);
    line(width, height/3 - 50, 0, height/3 - 50);
    rect(width/2-40, height/3, width/4-20, 20);
    
    let c = color(255, 228, 0);
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    line(this.pos.x, this.pos.y + 8, this.pos.x, this.pos.y - 8);
  }
}

// function keyPressed() {
//   if (keyCode === DOWN_ARROW) {
//     this.pos.add(this.vel);
//     this.pos.add(this.vel);
//   }
// }
