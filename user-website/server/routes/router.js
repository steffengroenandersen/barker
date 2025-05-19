import { Router } from "express";
import db from "../db/db.js";

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

router.get("/barks", (req, res) => {
  const dummyBarks = [
    { email: "steffen@localhost.com", body: "Woof woof!" },
    { email: "amanda@localhost.com", body: "Much bark. So wow." },
  ];
  return res.json(dummyBarks);
});

export default router;
