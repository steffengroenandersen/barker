// Load config
import dotenv from "dotenv";
dotenv.config();

// Create user method

function createUser() {
  return {
    username: "Steffen",
    email: "steffen@localhost.com",
    password: "steffen1234",
    repeatPassword: "steffen1234",
  };
}

// POST user method
async function postSignup() {
  console.log("postSignup()");
  console.log(process.env.API_URL);

  const newUser = createUser();

  try {
    const response = await fetch(process.env.API_URL + ":3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    console.log("Response:", response.status);
  } catch (error) {
    console.error("Error during fetch:", error.message);
  }
}

// interval method

setInterval(postSignup, 5000);
