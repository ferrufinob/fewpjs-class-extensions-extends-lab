class Polygon {
  constructor(side) {
    this.side = side;
  }

  get countSides() {
    //number of sides
    return this.side.length;
  }

  get perimeter() {
    // sum of all sides
    return this.side.reduce((total, current) => current + total, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.side[0] + this.side[1] > this.side[2] &&
      this.side[0] + this.side[2] > this.side[1] &&
      this.side[1] + this.side[2] > this.side[0]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  //make sure all sides are equal
  get isValid() {
    if (
      this.side[0] === this.side[1] &&
      this.side[0] === this.side[2] &&
      this.side[0] === this.side[3]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.side[0] ** 2;
  }
}
