//! Dependency Inversion Principle
interface Idatabase {
  save(data: string): void;
}

class MySqlDatabase implements Idatabase {
  save(data: string): void {
    console.log("Data saved", data);
  }
}

class HighLevelModule {
  constructor(private readonly database: Idatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

const saveMySql: MySqlDatabase = new MySqlDatabase();

const user = new HighLevelModule(saveMySql);
export const answer = user.execute("ariel");
