// ! Singleton Pattern
class Singleton {
  private static instance: Singleton;
  private static value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton.value = value;
  }

  get value() {
    return Singleton.value;
  }
}

const instance = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance.value = 10;

console.log(instance === instance2); // true

export { instance, instance2 };

// Todo: Exercise

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`${timestamp.toLocaleDateString()} - ${message}`);
  }
}

const logger1 = Logger.getInstance();
logger1.log("Es mi primer log");
const logger2 = Logger.getInstance();
logger2.log("Es mi segundo log");
