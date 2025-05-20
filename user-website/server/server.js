import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log("API server is running at port", port);
});
