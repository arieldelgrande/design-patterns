// ! Liskov Substitution Principles

abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

//* client code

const area = (shape: Shape) => {
  return shape.calculateArea();
};

const square: Square = new Square(10);

export const answer = area(square);
