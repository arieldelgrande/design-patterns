interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }
  description(): string {
    return "Simple coffee made with love";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }
  description(): string {
    return `coffee with milk`;
  }
}

//* client code

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.description());

coffee = new MilkDecorator(coffee);

console.log(coffee.cost());
console.log(coffee.description());

// ignore this export, i am using it just to debug
const ariel = "ariel";
export { ariel };

interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log("handle request", request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}
  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  handle(request: any): void {
    console.log("Logging Request", request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is Authenticated", request);
    } else {
      console.error("unAuthorized Access");
    }
  }
}

const request = {
  isAuthenticated: true,
  body: "Hello world",
};

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
