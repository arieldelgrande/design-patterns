//* Abstraction
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

//* client code

let circle = new Circle(5);

export const total = calculateTotalArea(circle);
