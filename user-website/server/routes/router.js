import { Router } from "express";
import db from "../db/db.js";

import { sendMessage } from "../rabbitmq/rabbitmq.js";

const router = Router();

const users = [];

router.post("/signup", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  if (!email || !password || password !== repeatPassword) {
    return res.status(400).json({ error: "Invalid signup data." });
  }

  try {
    const existingUser = await db.users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    await db.users.insertOne({ email, password });

    console.log(`New user signed up: ${email}`);

    return res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Invalid login data." });
  }

  // find user logic

  return res.status(200).json({ message: "Login succesful." });
});

const dummyBarks = [
  { email: "steffen@localhost.com", body: "Woof woof!" },
  { email: "amanda@localhost.com", body: "Much bark. So wow." },
];

router.get("/barks", (req, res) => {
  return res.json(dummyBarks);
});

router.post("/barks", async (req, res) => {
  const { email, body } = req.body;

  if (!email || !body) {
    return res.status(400).json({ error: "Missing email or bark body." });
  }

  const newBark = { email, body };
  dummyBarks.push(newBark);
  console.log(dummyBarks);

  // 🔥 Emit "bark.created" event
  try {
    await sendMessage("bark.created", {
      type: "bark.created",
      data: newBark,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to send RabbitMQ message:", err);
  }

  return res.status(201).json({ message: "Bark added succesfully." });
});

export default router;
