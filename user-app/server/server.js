import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/api/api.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  console.log("- HIT ON URL: /");

  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
