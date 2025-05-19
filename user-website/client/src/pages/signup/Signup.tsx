import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function signup(e: React.FormEvent) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(repeatPassword);
  }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="repeat-password">Repeat password</label>
        <input
          type="password"
          id="repeat-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <button type="submit">Signup</button>
      </form>
    </>
  );
}
