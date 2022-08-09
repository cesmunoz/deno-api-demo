import { config, MongoClient } from "../../deps.ts";

const { DB_NAME, DB_USER, DB_PASSWORD } = config();

const client = new MongoClient();
await client.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.2qti8.mongodb.net/?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1`
);
const db = client.database(DB_NAME);

export default db;
