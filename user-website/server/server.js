import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log("API server is running at port", port);
});
