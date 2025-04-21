import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export default function HomeNotLoggedIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="bg-white p-5 rounded-md shadow w-[400px] sm:w-[800px] m-2">
          <h1>Login</h1>
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
            <Button onClick={login}>Login</Button>
          </form>
        </div>
      </section>
    </>
  );
}
