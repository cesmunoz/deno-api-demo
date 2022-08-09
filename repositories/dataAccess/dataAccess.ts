import { Database, MongoClient } from "../../deps.ts";

class DataAccess {
  public client!: Database;

  constructor() {
    this.connect();
  }

  async connect() {
    const client = new MongoClient();
    await client.connect(
      "mongodb+srv://appUser:appPassword@cluster0.2qti8.mongodb.net/?retryWrites=true&w=majority"
    );
    const databaseClient = client.database("denotest");
    this.client = databaseClient;
  }
}

export default new DataAccess().client; 
