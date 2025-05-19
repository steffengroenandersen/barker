import { Router } from "express";

const router = Router();

const users = [];

router.post("/signup", (req, res) => {
  const { email, password, repeatPassword } = req.body;

  if (!email || !password || password !== repeatPassword) {
    return res.status(400).json({ error: "Invalid signup data." });
  }

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ error: "User already exists." });
  }

  users.push({ email, password });
  console.log(users);
  res.status(201).json({ message: "Signup succesful." });
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
