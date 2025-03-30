import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/user", (req, res) => {
  console.log("- HIT ON URL: /api/user");

  const user = req.body;
  console.log(user);

  res.status(201).json({ message: "User successfully created.", user: user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
