import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// DEV
const URL = process.env.MONGODB_URI || "mongodb://localhost:27017";

const DB_NAME = "barker";

const client = new MongoClient(URL);
let isConnected = false;

async function initializeDatabase() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  const db = client.db(DB_NAME);

  return {
    users: db.collection("users"),
    posts: db.collection("barks"),
  };
}

const db = await initializeDatabase();

export default db;
