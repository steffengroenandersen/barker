import express from "express";
import { sendMessage } from "../../../rabbitmq/rabbitmq.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("- HIT ON URL: /api/user");

  // Get user object
  const user = req.body;

  // send message
  const queue = "test";
  const message = {
    method: "createUser",
    payload: JSON.stringify(user),
  };

  await sendMessage(queue, message);

  res.status(201).json({ message: "User successfully created.", user: user });
});

export default router;
