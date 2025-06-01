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

//Todo: Excercise

// Payment Processor
// Credit Card
// Debit Card
// Paypal

abstract class PaymentProcessor {
  abstract payment(amount: number): string;
}

class CreditCard implements PaymentProcessor {
  payment(amount: number): string {
    return `Succesfully deposit the amount of ${amount} in your account`;
  }
}

class DebitCard implements PaymentProcessor {
  payment(amount: number): string {
    return `Succesfully deposit the amount of ${amount} in your Debit Card`;
  }
}

class Paypal implements PaymentProcessor {
  payment(amount: number): string {
    return `Succesfully deposit the amount of ${amount} in your account`;
  }
}

//* client code
const deposit = (paymentProccesor: PaymentProcessor, quantity: number) => {
  return paymentProccesor.payment(quantity);
};

const debitCard: DebitCard = new DebitCard();

export const account = deposit(debitCard, 20);
