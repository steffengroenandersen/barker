import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("- HIT ON URL: /");

  res.send("Hello world!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`user-svc is running on`, PORT);
});
