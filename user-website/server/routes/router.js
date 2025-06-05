import { Router } from "express";
import db from "../db/db.js";
import crypto from "crypto";

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

    // Save to db
    await db.users.insertOne({ email, password });

    // Create idempotency key

    const idempotencyKey = crypto
      .createHash("sha256")
      .update(email + "user.created")
      .digest("hex");

    console.log("KEY", idempotencyKey);

    // Push new user to email service
    try {
      await sendMessage("user.created", {
        type: "user.created",
        data: { email },
        idempotencyKey,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Failed to send RabbitMQ message:", err);
    }

    // Log and return status
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

  // TODO: Implement login logic
  console.log("message: Login succcesful.");

  return res.status(200).json({ message: "Login succesful." });
});

router.get("/barks", async (req, res) => {
  try {
    // Fetch all barks from the MongoDB collection
    const barks = await db.barks.find({}).toArray();
    return res.json(barks);
  } catch (error) {
    console.error("Failed to fetch barks:", error);
    return res.status(500).json({ error: "Failed to fetch barks." });
  }
});

router.post("/barks", async (req, res) => {
  const { email, body } = req.body;

  // Validate input
  if (!email || !body) {
    return res.status(400).json({ error: "Missing email or bark body." });
  }

  // Create and save new bark
  const newBark = { email, body };
  await db.barks.insertOne({ email, body });

  // Push new bark to moderation service
  try {
    await sendMessage("bark.created", {
      type: "bark.created",
      data: newBark,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to send RabbitMQ message:", err);
  }

  // Return status to client
  return res.status(201).json({ message: "Bark added succesfully." });
});

export default router;
