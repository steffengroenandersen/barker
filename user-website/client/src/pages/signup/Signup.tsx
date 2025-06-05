import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  async function signup(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, repeatPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/login");
      } else {
        console.error("Signup failed:", data);
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="repeat-password">Repeat password</label>
          <input
            type="password"
            id="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
      </form>
    </>
  );
}
