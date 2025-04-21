import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
    console.log(repeatPassword);

    // create requestBody

    const requestBody = {
      email,
      password,
      repeatPassword,
    };

    // POST
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    // Redirect
    navigate("/login");
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white p-5 rounded-md shadow min-w-80 sm:min-w-[400px]">
          <h1>Register</h1>
          <form className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Input
              type="repeatPassword"
              placeholder="Repeat password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />

            <Button onClick={register}>Register</Button>
          </form>
        </div>
      </section>
    </>
  );
}
