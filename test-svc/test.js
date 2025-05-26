import dotenv from "dotenv";

dotenv.config();

const INTERVAL = process.env.TEST_INTERVAL;
const BACKEND_URL = process.env.BACKEND_URL;

/* 

STRESS TEST SIGNUP

*/

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `user+${randomString}@localhost.com`;
}

async function testSignup() {
  console.log("RUNNING testSignup()");

  const email = generateRandomEmail();
  const body = {
    email,
    password: "password",
    repeatPassword: "password",
  };

  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log(`[${new Date().toISOString()}] Signup attempt for ${email} - Status: ${response.status}`);
    console.log(result);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error during signup:`, error);
  }
}

// Run every 10 seconds
setInterval(testSignup, INTERVAL);
