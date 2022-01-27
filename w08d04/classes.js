// const Rectangle = class {};
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle);
console.log(rectangle.area());

class RectangularPrism extends Rectangle {
  constructor(width, length, height) {
    super(width, length)

    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }
}

const prism = new RectangularPrism(3, 4, 5);
console.log(prism);
console.log(prism.volume());

// prism.volume()