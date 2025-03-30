// Create user method

function createUser() {
  return {
    username: "Steffen",
    email: "steffen@localhost.com",
    password: "steffen1234",
  };
}

// POST user method
async function postSignup() {
  console.log("postSignup()");

  const newUser = createUser();

  const response = await fetch("http://user-app-server:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  // console.log("Response:", response.status);
}

// interval method

setInterval(postSignup, 1000);
