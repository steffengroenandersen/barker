import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log("- HIT ON URL: /api/user");

  const user = req.body;
  console.log(user);

  res.status(201).json({ message: "User successfully created.", user: user });
});

export default router;
