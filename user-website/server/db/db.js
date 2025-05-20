import { MongoClient } from "mongodb";

// DEV
const URL = process.env.MONGO_URI || "mongodb://localhost:27017";

// PROD
// const URL = process.env.MONGO_URI || "mongodb://mongodb:27017";

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
